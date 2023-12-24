import React, { useContext, useRef } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io"
import { TodoContext } from '../Store/TodoItem-store';
const AddTodo = () => {

const {  newItem}=useContext(TodoContext)
const name=useRef(null)
const date=useRef(null)

const handleBtn=(e)=>{
  e.preventDefault()
const nameData=name.current.value
const dateData=date.current.value
name.current.value=""
date.current.value=""


   newItem(nameData,dateData)
 
}
  return (
    <div className="container text-center">
      <form   onSubmit={handleBtn}className="row ">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"  ref={name}  />
        </div>
        <div className="col-4">
          <input type="date" ref={date}  />
        </div>
        <div className="col-2">
          <button type='submit' className="bt btn-success kg-button"  >
            
          <IoIosAddCircleOutline />
          </button>
          
          
        </div>
      </form>
    </div>
  );
};

export default AddTodo;