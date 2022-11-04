import React, { useState } from "react";
import { TodoForm } from "./todoForm.jsx";
import { TodoList } from "./todoList.jsx";
import { TodoCounter } from "./todoCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [list, setList] = useState(["take out the trash", "make the bed"]);
  return (
    <div className="main">
      
        <h1 className="text-center title">Todos</h1>
        <TodoForm setList={setList} list={list} />
        <div className="mx-auto list">
          
          <TodoList list={list} setList={setList} />
          <TodoCounter list={list} />
          
        </div>
      
    </div>
  );
};

export default Home;
