import React, { useContext } from "react";
import "./TodoSearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../TodoContext";

function TodoSearchBar() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        className="search-input"
        name="search"
        id="search"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </div>
  );
}

export { TodoSearchBar };
