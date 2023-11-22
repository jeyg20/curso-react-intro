import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  //
  // The function passed to useState will only be executed the first time the component is rendered
  const [item, setItem] = useState(
    () => JSON.parse(localStorage.getItem(itemName)) || initialValue
  );

  const saveItem = (newItem) => {
    setItem(newItem);
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
