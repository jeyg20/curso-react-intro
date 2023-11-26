import React from "react";
import "./TodosLoading.scss";

const TodosLoading = () => {
  return (
    <div>
      <div className="loading-skeleton"></div>
      <div className="loading-skeleton"></div>
      <div className="loading-skeleton"></div>
    </div>
  );
};

export { TodosLoading };
