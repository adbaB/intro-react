import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
    
  const [error,setError] = useState(false) 
  const [loading, setloanding] = useState(true);
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {

        try {
            const localStorageItem = localStorage.getItem(itemName);
      
            let parsedItem;
      
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
            }
            setloanding(false);
            setItem(parsedItem);
            
        } catch (error) {
            setError(error)
        }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, []);

  const saveItem = (newArrayItem) => {
      try {
          const stringifiedItem = JSON.stringify(newArrayItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newArrayItem);
          
      } catch (error) {
        setError(error)
      }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}
