import React, { useContext } from "react";
import { TodoContext } from "../Store/TodoItem-store";

const ErrorMsg=()=>{
  
  const {todoos}=useContext(TodoContext)
  return(
    <>{todoos.length ===0 ? <h1>Enter Todo Here</h1>:null}</>
  )
}
export default ErrorMsg