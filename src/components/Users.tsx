import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([])


  const getUsers = () => {
    const pr = axios.get('https://reqres.in/api/users/2')
    pr.then((res) => setUsers(res.data.data))
  }
  console.log(users)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return <li key={user.id}>{user.email}</li>
      })}
    </>

  );
}

export default Users;