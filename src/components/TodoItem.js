import "../styles/todoItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <button onClick={props.onComplete}>
        <FontAwesomeIcon
          icon={props.completed ? faCircleCheck : faCircle}
          className="complete-btn-icon"
          />
      </button>
        <div className="text-container">
          <p>{props.text}</p>
        </div>
      <button onClick={props.onDelete}>
        <FontAwesomeIcon icon={faXmark} className="delete-btn-icon" />
      </button>
    </li>
  );
}

export { TodoItem };
