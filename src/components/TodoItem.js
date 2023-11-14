function TodoItem({ text, completed }) {
  return (
    <li>
      <p>{text}</p>
      <span>{ completed? '✔️' : '❌'}</span>
    </li>
  )
}

export { TodoItem }