import { TodoCounter } from "../components/TodoCounter";
import { TodoSearchBar } from "../components/TodoSearchBar";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { TodoContext } from "../TodoContex";

function AppUi(props) {
  return (
    <>
      <TodoCounter
        completed={props.completedTodos}
        total={props.totalTodos}
        isLoading={props.loading}
      />
      <TodoSearchBar
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
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
                onComplete={() => props.completeTodo(todo.text)}
                onDelete={() => props.deleteTodo(todo.text)}
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
