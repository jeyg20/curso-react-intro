import '../styles/todoCreateButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function TodoCreateButton() {
  return (
    <div className='add-btn-container'>
      <button>
        <FontAwesomeIcon icon={faCirclePlus} className='add-btn'/>
      </button>
    </div>
  )
}

export { TodoCreateButton }