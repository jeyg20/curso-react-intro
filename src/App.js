import { TodoCounter } from "./components/TodoCounter";
import { TodoSearchBar } from "./components/TodoSearchBar";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoCreateButton } from "./components/TodoCreateButton";
import "./styles/App.scss";
import React from "react";

const defaultTodos = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    completed: true,
  },
  { text: "Learn React", completed: false },
  { text: "Learn Redux", completed: false },
  { text: "Learn React Router", completed: false },
  { text: "Learn GraphQL", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  // The emmet abbreviation "!!" turns the value into a boolean in case the returned one is as string, number etc..
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const updateTodo = (text, actionCallback) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    if (todoIndex !== false) {
      actionCallback(newTodos, todoIndex);
      setTodos(newTodos);
    }
  };

  const completeTodo = (text) => {
    updateTodo(text, (todos, index) => {
      todos[index].completed = !todos[index].completed;
    });
  };

  const deleteTodo = (text) => {
    updateTodo(text, (todos, index) => {
      todos.splice(index, 1);
    });
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
      <TodoCreateButton />
    </>
  );
}

export default App;
