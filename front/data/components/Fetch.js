import { useState, useEffect } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
    {
      users.length > 0 && (
        { users.map(user => (<span>{user.name}</span>)) }
      )
    }
    </div>
  );
};





export default Fetch;