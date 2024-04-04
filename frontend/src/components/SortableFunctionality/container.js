import React from "react";

// imports the dragging and dropping functionality from dnd-kit
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

// imports the list from sortable_item.js
import SortableList from "../SortableFunctionality/sortable_item";

// provides styling for the container
const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1
};

// provides the container for each of the columns in the sorting exercise
export default function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  // returns the sortable function with the items included from sortable_item
  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id) => (
          <SortableList key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
