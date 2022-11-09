import React, { useState } from "react";



export function TodoCounter(props) {
  const [input, setInput] = useState("");

  return (
    <div className="todo-counter navbar mx-auto px-2 todo-list-element">
     {props.list.length} Items left on the list
     
     
    </div>
  );
}

