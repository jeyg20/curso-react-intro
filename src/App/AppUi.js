import { TodoCounter } from "../components/TodoCounter";
import { TodoSearchBar } from "../components/TodoSearchBar";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";

function AppUi(props) {
  return (
    <>
      <TodoCounter completed={props.completedTodos} total={props.totalTodos} />
      <TodoSearchBar
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <TodoList>
        {props.loading && <p>Loading...</p>}
        {props.error && <p>An error has ocurred!...</p>}
        {!props.loading && !props.searchedTodos.length && (
          <p>There are no todos!</p>
        )}
        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </>
  );
}

export { AppUi };
