import { useState } from 'react';

const useLocalStorage = (key:string, initialValue:any) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.warn(`Failed to retrieve value for key "${key}" from LocalStorage: ${error}`);
      return initialValue;
    }
  });

  const setStoredValue = (newValue:any) => {
    setValue(newValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.warn(`Failed to store value for key "${key}" in LocalStorage: ${error}`);
    }
  };

  return [value, setStoredValue];
};

export default useLocalStorage;