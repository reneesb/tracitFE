import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import getAllUsers from '../api/UserData';

function ProjectTeam() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user?.uid} userObj={user} />
      ))}
    </div>
  );
}

export default ProjectTeam;
