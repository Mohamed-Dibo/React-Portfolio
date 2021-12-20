import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../store/todo/todoActions";
import "./todoForm.css";

function TodoForm() {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "content") setContent(e.target.value);
    setTodoList({ id: Date.now(), title, content });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    dispatch(addAction(todoList));
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
        className="title"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="content"
          className="content"
          name="content"
          value={content}
          onChange={handleChange}
          required
        ></textarea>
        <div className="add">
     <button type="submit" className="btn btn-primary mb-3">
        Add
      </button>
     </div>
      </div>
    </form>
  );
}

export default TodoForm;
