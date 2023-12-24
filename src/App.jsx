import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"


import './App.css';
import TodoI from "./components/TodoI";
import { useReducer} from "react";
import ErrorMsg from "./components/ErrorMsg";
import { TodoContext } from "./Store/TodoItem-store";
// const initialState=0
// const reducer=(state,action)=>{
//  if(action.type==="INCREMENT"){

// return state+1
// } if(action.type==="DECREMENT"){

//   return state-1
//   }

// }

const reducer=(state,action)=>{
  if(action.type==="ADD"){
        const newItem=[...state,{name:action.payload.todoItem,Date:action.payload.dateItem}]
   return newItem
  }else if(
    action.type==="DEL"
  ){
    const delItem=state.filter((item)=> item.name !== action.payload.todoName)
    return delItem
  }

}

function App() {

  

  // const [todoos,setTodoos]=useState([])

const [todoos,dispatchTodoItem]=useReducer(reducer,[])


 const newItem=(todoItem,dateItem)=>{



const newItem={
  type:"ADD",
  payload:{
    todoItem,
    dateItem,
  }
  
}
dispatchTodoItem(newItem)



    // const newS=[...todoos,{name:todoItem,Date:dateItem}]
    // setTodoos(newS)
}

const handleDel=(todoName)=>{





const delItem={
  type:"DEL",
  payload:{
    todoName,
  }
}
dispatchTodoItem(delItem)


  //  const delItem=todoos.filter((item)=> item.name !== todoName)
  // setTodoos(delItem)

 }
// const arr=[1,2.1,2,12,1,1]
// const [state,dispatch]=useReducer(reducer,initialState)

  return (
    // <>
    // <h1>{state}</h1>
    // <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
    // <button onClick={()=>dispatch({type:"DECREMENT"})}>DCE</button>
    // </>
    <TodoContext.Provider value={{
      todoos,
      newItem,
      handleDel,
    }}>
    <center className="todo-container">
      <AppName  />      
      <AddTodo />
      <ErrorMsg />
      <TodoI  />
   
   {/* <h1>{arr.filter((item)=>item >1)}</h1> */}
    </center>
    </TodoContext.Provider>
    
  )
}

export default App
