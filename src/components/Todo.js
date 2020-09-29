import React from "react";

const Item = (props) => {
  return (
    <div
      className={`item${props.item.done ? "done" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};
export default Item;
