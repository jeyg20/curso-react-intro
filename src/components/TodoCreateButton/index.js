import "./TodoCreateButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function TodoCreateButton({ setOpenModal }) {
  return (
    <div className="add-btn-container">
      <button
        className="add-btn"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        <FontAwesomeIcon icon={faCirclePlus} className="add-btn-icon" />
      </button>
    </div>
  );
}

export { TodoCreateButton };
