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

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearchBar />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !searchedTodos.length && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUi };
