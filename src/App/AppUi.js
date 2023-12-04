import { TodoCounter } from "../components/TodoCounter";
import { TodoSearchBar } from "../components/TodoSearchBar";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { TodoContext } from "../components/TodoContext";
import { useContext } from "react";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoDetail } from "../components/TodoDetail";

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openCreateTodo,
    setOpenCreateTodo,
    openDetailTodo,
    setOpenDetailTodo,
    setSelectedTodo,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearchBar />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !searchedTodos.length && <TodosEmpty />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            setOpenDetailTodo={setOpenDetailTodo}
            setSelectedTodo={setSelectedTodo}
          />
        ))}
      </TodoList>
      <TodoCreateButton setOpenCreateTodo={setOpenCreateTodo} />
      {openCreateTodo && (
        <div>
          <Modal>
            <TodoForm />
          </Modal>
        </div>
      )}
      {openDetailTodo && (
        <div>
          <Modal>
            <TodoDetail setOpenDetailTodo={setOpenDetailTodo} />
          </Modal>
        </div>
      )}
    </>
  );
}

export { AppUi };
