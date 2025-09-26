
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        const response = axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data);
        });
       
    }, [])

  return (
    <>
        <table class="min-w-full text-sm divide-y divide-gray-100 table-fixed">
          <thead>

          </thead>
          <tbody></tbody>
        </table>
    </>
  )
}

export default UserList