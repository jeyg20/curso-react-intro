import "./TodoCreateButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function TodoCreateButton() {
  return (
    <div className="add-btn-container">
      <button
        className="add-btn"
        onClick={(event) => {
          console.log("You've clicked the btn ");
          console.log(event.target);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className="add-btn-icon" />
      </button>
    </div>
  );
}

export { TodoCreateButton };
