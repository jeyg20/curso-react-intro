import React, { useState } from "react";
import "./TodoForm.scss";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    // Add your logic here to handle adding the todo
    console.log("Todo added:", inputValue);
    setInputValue("");
  };

  const handleCancel = () => {
    // Add your logic here to handle canceling the todo
    console.log("Todo canceled");
    setInputValue("");
  };

  return (
    <form>
      <label htmlFor="">Write you new todo</label>
      <textarea
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buy groceries"
      />
      <div className="Container-btn">
        <button
          className="TodoForm-btn TodoForm-btn--cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="TodoForm-btn TodoForm-btn--add"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
