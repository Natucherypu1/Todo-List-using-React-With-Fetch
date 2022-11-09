import React, { useState,useEffect } from "react";
import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoCounter } from "./TodoCounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);
  const [hasItem,setHasItem] = useState(false);
  const backendUrl = "https://assets.breatheco.de/apis/fake"
  function getList () { 
    fetch(backendUrl + '/todos/user/natucherypu1')
     .then(response => response.json()).then(data=> setList(data))
  }

  
    function addItem(input){
      let newList =  list.concat({"label":input, "done":false});
      setList(newList)
      fetch(backendUrl + '/todos/user/natucherypu1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newList),
        redirect: 'follow'
      })
      .then(response => console.log(response.ok))
      .catch(error => console.log(error));
    }
  function deleteItem(index){
    let newList = list.filter((item, i) => index != i);
    setList(newList)
    fetch(backendUrl + '/todos/user/natucherypu1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newList),
      redirect: 'follow'
    })
    .then(response => console.log(response.ok))
    .catch(error => console.log(error));
  }
 
  
  useEffect(() => {
			getList()
  }, []);

    return (
    <div className="main">
      
        <h1 className="text-center title">Todos</h1>
        <TodoForm setList={setList} list={list} addItem={addItem} />
        <div className="mx-auto list">
          
          <TodoList list={list} deleteItem={deleteItem} />
          <TodoCounter list={list} />
          
        </div>
      
    </div>
  );
};

export default Home;
