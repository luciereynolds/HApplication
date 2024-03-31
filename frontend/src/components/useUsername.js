import { useState } from 'react';

const useUsername = () => {
  const [username, setUsername] = useState(() => {
    // Get username from local storage if it exists
    const storedUsername = localStorage.getItem('username');
    return storedUsername ? storedUsername : '';
  });

  const setAndStoreUsername = (newUsername) => {
    // Set username in state
    setUsername(newUsername);
    // Store username in local storage
    localStorage.setItem('username', newUsername);
  };

  return [username, setAndStoreUsername];
};

export default useUsername;
