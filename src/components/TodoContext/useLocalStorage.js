import { useEffect, useState } from "react";

/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} itemName - The name of the item to be stored in local storage.
 * @param {*} initialValue - The initial value of the item.
 * @param {Function} idGenerator - A function to generate an id for the item.
 * @returns {Object} - An object containing the item, a function to save the item, a loading flag, and an error flag.
 */
function useLocalStorage(itemName, initialValue, idGenerator) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // useEffect function will only be executed the first time the component is rendered
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          const uniqueId = idGenerator();
          const newItem = { id: uniqueId, ...initialValue };

          localStorage.setItem(itemName, JSON.stringify(newItem));
          parsedItem = newItem;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
