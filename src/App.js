import { TodoCounter } from './components/TodoCounter';
import { TodoSearchBar } from './components/TodoSearchBar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoCreateButton } from './components/TodoCreateButton';
import './styles/App.scss';
import React from 'react';

const defaultTodos = [
  { text: 'Learn HTML', completed: true },
  { text: 'Learn React', completed: false },
  { text: 'Learn Redux', completed: false },
  { text: 'Learn React Router', completed: false },
  { text: 'Learn GraphQL', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // The emmet abbreviation "!!" turns the value into a boolean in case the returned one is as string, number etc..
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    < >
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearchBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        { searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          )) }
      </TodoList>
      <TodoCreateButton/>
    </>
  );
}

export default App;