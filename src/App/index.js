import { AppUi } from "./AppUi";
import "./App.scss";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     completed: true,
//   },
//   { text: "Learn React", completed: false },
//   { text: "Learn Redux", completed: false },
//   { text: "Learn React Router", completed: false },
//   { text: "Learn GraphQL", completed: true },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  // The emmet abbreviation "!!" turns the value into a boolean in case the returned one is as string, number etc..
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // The filter method returns a new array with the elements that pass the condition
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const updateTodo = (text, actionCallback) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    if (todoIndex !== false) {
      actionCallback(newTodos, todoIndex);
      saveTodos(newTodos);
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
    <AppUi
      loafing={loading}
      error={error}
      completeTodo={completeTodo}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completedTodos={completedTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
