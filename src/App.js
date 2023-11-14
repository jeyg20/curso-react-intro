//import logo from './platzi.webp';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearchBar } from './components/TodoSearchBar';
import { TodoList } from './components/TodoList';
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

function TodoItem(props) {
  return (
    <li>
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  )
}

export default App;