import React from "react";
import "./TodoCounter.scss";

function TodoCounter({ total, completed, isLoading }) {
  return (
    <div className="todo-counter">
      {isLoading && <h1 className="loading-todos">Loading todos...</h1>}
      {total === 0 && !isLoading && (
        <h1>You don't have todos, create your first one</h1>
      )}
      {total > 0 && completed === total && (
        <>
          <h1>You have completed all your {total} todos</h1>
          <span>🎉</span>
        </>
      )}
      {total > 0 && completed !== total && (
        <h1>
          You have completed {completed} of {total} todos
        </h1>
      )}
    </div>
  );
}

export { TodoCounter };
