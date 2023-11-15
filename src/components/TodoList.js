import '../styles/todoList.scss'

function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  )
}

export { TodoList }