import { TodoCounter } from "../components/TodoCounter";
import { TodoSearchBar } from "../components/TodoSearchBar";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { TodoContext } from "../components/TodoContext";

function AppUi() {
  return (
    <>
      <TodoCounter />
      <TodoSearchBar />
      <TodoContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <TodoCreateButton />
    </>
  );
}

export { AppUi };
