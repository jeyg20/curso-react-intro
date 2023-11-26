import React, { useContext } from "react";
import "./TodoCounter.scss";
import { TodoContext } from "../../TodoContex";

function TodoCounter() {
  const { completedTodos, totalTodos, loading } = useContext(TodoContext);

  return (
    <div className="todo-counter">
      {loading && <h1 className="loading-todos">Loading todos...</h1>}

      {totalTodos === 0 && !loading && (
        <h1>You don't have any todos. Create your first one.</h1>
      )}

      {totalTodos > 0 && completedTodos === totalTodos && (
        <>
          <h1>You have completed all {totalTodos} todos</h1>
          <span>🎉</span>
        </>
      )}

      {totalTodos > 0 && completedTodos !== totalTodos && (
        <h1>
          You have completed {completedTodos} of {totalTodos} todos
        </h1>
      )}
    </div>
  );
}

export { TodoCounter };
