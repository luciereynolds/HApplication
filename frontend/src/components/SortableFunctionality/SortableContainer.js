import React, { useState } from 'react';

// imports functions from dnd-kit
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

// imports the container and item from container and sortable_item
import Container from '../SortableFunctionality/container';
import { Item } from '../SortableFunctionality/sortable_item';

// styles wrapper
const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
};

// logs items that have been dragged and dropped to console
const defaultAnnouncements = {
  onDragStart(id) {
    console.log(`Picked up draggable item ${id}.`);
  },
  onDragOver(id, overId) {
    if (overId) {
      console.log(`Draggable item ${id} was moved over droppable area ${overId}.`);
      return;
    }

    console.log(`Draggable item ${id} is no longer over a droppable area.`);
  },
  onDragEnd(id, overId) {
    if (overId) {
      console.log(`Draggable item ${id} was dropped over droppable area ${overId}`);
      return;
    }

    console.log(`Draggable item ${id} was dropped.`);
  },
  onDragCancel(id) {
    console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
  },
};

// gets the coordinates for the item and mouse
const SortableContainer = ({ initialItems, onSortChange }) => {
  const [items, setItems] = useState(initialItems);
  const [activeId, setActiveId] = useState();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // returns the containers with the items using dnd context
  return (
    <div style={wrapperStyle}>
      <DndContext
        announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Container id="root" items={items.root} />
        <Container id="container1" items={items.container1} />
        <Container id="container2" items={items.container2} />
        <Container id="container3" items={items.container3} />
        <DragOverlay>
          {activeId ? <Item id={activeId} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event) {
    const { active, over, draggingRect } = event;
    const { id } = active;
  
    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = over ? findContainer(over.id) : null;
  
    if (!over || !activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }
  
    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
  
      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(over.id);
  
      let newIndex;
      if (over.id in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          overIndex === overItems.length - 1 &&
          draggingRect &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;
  
        const modifier = isBelowLastItem ? 1 : 0;
  
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }
  
      // If the item is moved within the same container, adjust newIndex
      if (activeContainer === overContainer && activeIndex < newIndex) {
        newIndex--;
      }
  
      const newItems = {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };

      // Call the provided onSortChange function with the new state
      onSortChange(newItems);

      return newItems;
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
  
    if (!over) {
      // If over is undefined, the item was not dropped over a valid target
      setActiveId(null);
      return;
    }
  
    const { id } = active;
    const { id: overId } = over;
  
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);
  
    if (!activeContainer || !overContainer || activeContainer !== overContainer) {
      setActiveId(null);
      return;
    }
  
    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);
  
    if (activeIndex !== overIndex) {
      const newItems = {
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
      };

      // Call the provided onSortChange function with the new state
      onSortChange(newItems);

      setItems(newItems);
    }
  
    setActiveId(null);
  }
};

export default SortableContainer;
