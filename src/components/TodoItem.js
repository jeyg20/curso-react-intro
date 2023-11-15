import '../styles/todoItem.scss'

function TodoItem({ text, completed }) {
  return (
    <li>
      <span>{ completed? '✔️' : '⭕'}</span>
      <p>{text}</p>
      <span>❌</span>
    </li>
  )
}

export { TodoItem }