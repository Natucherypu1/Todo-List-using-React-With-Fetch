import React, { useState } from "react";

export function TodoList(props) {
  const deleteTodo = (index) => {
    props.setList(props.list.filter((item, i) => index != i));
  };

  return (
    <div className="todo-list p-0">
     
        {props.list.map((item, index) => (
          <li
            className="navbar mx-auto px-2  todo-list-element d-flex"
            onMouseEnter={() =>
              document.getElementById("ico" + index).classList.add("visible")
            }
            onMouseLeave={() =>
              document.getElementById("ico" + index).classList.remove("visible")
            }
            key={index}
          >
            {item}
            <i
           
              id={"ico" + index}
              className="fa-regular fa-trash-can ms-auto"
              onClick={() => deleteTodo(index)}
            ></i>
          </li>
        ))}
      
    </div>
  );
}
