import React from "react";
import Header from "./todoHeader/todoHeader";
import Form from "./todoForm/todoForm";
import List from "./todoList/todoList";
import { FcBookmark } from 'react-icons/fc';
import "./todo.css";

function todo() {
  return (
    <div className="todo">
      <div className="todo-view row d-flexflex-column">
       <div className="signe"> <FcBookmark /></div>
        <Header />
        <Form />
        <List />
      </div>
    </div>
  );
}

export default todo;
