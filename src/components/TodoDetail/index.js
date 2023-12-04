import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoDetail.scss";

const TodoDetail = ({ setOpenDetailTodo }) => {
  const { selectedTodo } = useContext(TodoContext);

  return (
    <div className="detail-content">
      <div className="detail-text-container">
        <p>{selectedTodo}</p>
      </div>
      <button
        onClick={() => {
          setOpenDetailTodo((prev) => !prev);
        }}
      >
        Close
      </button>
    </div>
  );
};

export { TodoDetail };
