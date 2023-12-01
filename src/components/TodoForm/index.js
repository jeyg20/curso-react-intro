import React, { useState, useContext } from "react";
import "./TodoForm.scss";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="">Write you new todo</label>
      <textarea
        type="text"
        value={inputValue}
        placeholder="Buy groceries"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div className="Container-btn">
        <button
          type="button"
          className="TodoForm-btn TodoForm-btn--cancel"
          onClick={() => {
            setOpenModal((state) => !state);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-btn TodoForm-btn--add"
          onClick={() => {
            setOpenModal((state) => !state);
            addTodo(inputValue);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
