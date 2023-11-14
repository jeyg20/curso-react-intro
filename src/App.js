import { TodoCounter } from './components/TodoCounter';
import { TodoSearchBar } from './components/TodoSearchBar';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoCreateButton } from './components/TodoCreateButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearchBar />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <TodoCreateButton/>
    </div>
  );
}

export default App;