import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {deleteAction} from "../../../store/todo/todoActions"
import { MdDelete } from 'react-icons/md';

function TodoList() {
    const todo = useSelector(state => state.todoReducer.todo);
    const dispatch = useDispatch()
    useEffect(() => {
      localStorage.setItem("items",JSON.stringify(todo));
    }, [todo])
  return (
    <ul className="list w-50 m-auto text-start">
      <li className="list-group-item active text-capitalize border-0" style={{backgroundColor:'rgb(244, 67, 54)'}} aria-current="true">
        task list
      </li>
      {
        todo.length?
        todo.map((item)=>{
          return <li key={item.id} className="list-group-item text-capitalize d-flex justify-content-between"> {item.title} : {item.content}<span className="text-danger fs-3" style={{cursor: 'pointer'}} onClick={()=>{
            dispatch(deleteAction(item.id));
          }}><MdDelete /></span></li>
          
        }):
        <li  className="list-group-item text-center fs-4 text-danger text-capitalize">no items</li>
      }
    </ul>
  );
}

export default TodoList;
