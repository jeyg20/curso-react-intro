import '../styles/todoSearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function TodoSearchBar() {
  return (
    <div className='input-container'>
      <input type="text" placeholder="Search..." />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
    </div>
  )
}

export { TodoSearchBar }