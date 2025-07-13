import React, { useState } from 'react';
import './App.css';

function App() {
  let [todolist,setTodolist]= useState([])
  let saveToDoList=(event)=>{
    let ToDoName=event.target.ToDoName.value;
    if(!todolist.includes(ToDoName)){
let Finaltodolist=[...todolist,ToDoName]
setTodolist(Finaltodolist)
    }
    else{
      alert("ToDo Name Already Exists...")
    }
    event.preventDefault()
  }
  let list=todolist.map((value,index)=>{
return (
    <ToDoListItems key={index} value={value} indexNumber={index}
    todolist={todolist}
    setTodolist={setTodolist}
    />
  );
});
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='ToDoName'/><button>Save</button>
      </form>
      <div class='outerdiv'>
      <ul>
        {list}
      </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoListItems({value,indexNumber, todolist, setTodolist}){
  let [status,setStatus]=useState(false)
  let deleterow=()=>{
    let finaldata=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finaldata)
  }
  let checkStatus=()=>{
setStatus(!status)

  }
  return(
    <li className={(status)? 'completetodolist': ''} onClick={checkStatus}>{indexNumber+1}{value} <span onClick={deleterow}>&times;</span></li>
  )
}
