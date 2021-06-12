import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState();
const [loadedUsers, setLoadedUsers]

  useEffect(() => {
    const sendRequest = () => {
      const response = await fetch('http://localhost:5000/api/users');

      const responseData = await response.json();
    }
    sendRequest();
  }, []);

  return <UsersList items={USERS} />;
};

export default Users;
