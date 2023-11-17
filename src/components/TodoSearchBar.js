import React from 'react'
import '../styles/todoSearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function TodoSearchBar({searchValue, setSearchValue}) {
  
  return (
    <div className='input-container'>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchValue}
        className="search-input"
        name="search"
        id="search"

        onChange={
          (event) => {
            setSearchValue(event.target.value)
          }
        }
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
    </div>
  )
}

export { TodoSearchBar }