import "./TodoItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem({
  text,
  completed,
  onComplete,
  onDelete,
  setOpenDetailTodo,
  setSelectedTodo,
}) {
  return (
    <li className={completed ? "completed" : ""}>
      <button onClick={onComplete}>
        <FontAwesomeIcon
          icon={completed ? faCircleCheck : faCircle}
          className="complete-btn-icon"
        />
      </button>
      <div
        className="text-container"
        onClick={() => {
          setOpenDetailTodo((prev) => !prev);
          setSelectedTodo(text);
        }}
      >
        <p>{text}</p>
      </div>
      <button onClick={onDelete}>
        <FontAwesomeIcon icon={faXmark} className="delete-btn-icon" />
      </button>
    </li>
  );
}

export { TodoItem };
