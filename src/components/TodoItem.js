import "../styles/todoItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : null}>
      <span>
        <FontAwesomeIcon
          icon={props.completed ? faCircleCheck : faCircle}
          size="lg"
          onClick={props.onComplete}
        />
      </span>
      <p>{props.text}</p>
      <span>
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={props.onDelete} />
      </span>
    </li>
  );
}

export { TodoItem };
