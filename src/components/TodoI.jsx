import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../Store/TodoItem-store";
const TodoI=()=>{

  const {todoos}=useContext(TodoContext)

  return(
    <div className='item-container'            >
{todoos.map((item)=>(<TodoItem todoName={item.name} todoDate={item.Date} ></TodoItem>))}

    
      </div>
  
  )
}

export default TodoI