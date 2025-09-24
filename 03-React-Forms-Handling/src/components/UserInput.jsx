import React, { useState } from 'react'

const UserInput = () => {

    const [user, setUser] = useState({
        username : "",
        password : ""
    })

    const handleInput = (e) => {
       setUser({
       ...user,
        [e.target.name] : e.target.value
       })   
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(user);
    };

  return (
    <div>
        <pre>{JSON.stringify(user)}</pre>
        <form onSubmit={e => submitForm(e)}>
            <input type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleInput(e)}
            placeholder='Enter your name' style={{border : "1px solid black"}}/>
            <input type="password"
            value={user.password}
            name="password"
            onChange={(e) => handleInput(e)}
            placeholder='Enter your name' style={{border : "1px solid black"}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserInput