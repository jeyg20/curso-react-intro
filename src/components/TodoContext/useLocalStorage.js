import { useEffect, useState } from "react";

/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} itemName - The name of the item to be stored in local storage.
 * @param {*} initialValue - The initial value of the item.
 * @returns {Object} - An object containing the item, a function to save the item, a loading flag, and an error flag.
 */
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // The function passed to useEffect will only be executed the first time the component is rendered
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        console.log(initialValue);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
