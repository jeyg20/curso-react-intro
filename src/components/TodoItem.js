import '../styles/todoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function TodoItem({ text, completed }) {
  return (
    <li className={completed? 'completed': null}>
      <span>
        <FontAwesomeIcon icon={completed? faCircleCheck: faCircle} size="lg" />
      </span>
      <p>{text}</p>
      <span>
        <FontAwesomeIcon icon={faXmark} size="2xl"/>
      </span>
    </li>
  )
}

export { TodoItem }