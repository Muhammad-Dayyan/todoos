import { createContext } from "react";


export  const TodoContext=createContext(
  {
    todoos:[],
    newItem:()=>{},
    handleDel:()=>{}
  }
)