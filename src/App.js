import { TodoCounter } from './components/TodoCounter';
import { TodoSearchBar } from './components/TodoSearchBar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoCreateButton } from './components/TodoCreateButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Learn HTML', completed: true },
  { text: 'Learn React', completed: false },
  { text: 'Learn Redux', completed: false },
  { text: 'Learn React Router', completed: false },
  { text: 'Learn GraphQL', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={5}/>
      <TodoSearchBar />
      <TodoList>
        { defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          )) }
      </TodoList>
      <TodoCreateButton/>
    </React.Fragment>
  );
}

export default App;