import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Item(props) {
  const { id } = props;

  const style = {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #8c7bff",
    margin: "10px 0",
    background: "#8c7bff",
    color: "white", 
    borderRadius: "15px",
  };
  

  return <div style={style}>{id}</div>;
}

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "15px",
    pointerEvents: "none",
    zIndex: isDragging ? 1 : 0, 
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Item id={props.id} />
      {isDragging && <div style={overlayStyle}></div>}
    </div>
  );
}
