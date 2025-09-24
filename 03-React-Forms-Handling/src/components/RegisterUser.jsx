import React, {useState} from 'react';

const RegisterUser = () => {

    const [user, setUser] = useState({
        username : "",
        email : "",
        password : "",
        role : "",
        terms : false
    });

    const handleInput = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };

    const handleTerms = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.checked
        })
    };

    const submitRegister = (e) => {
        e.preventDefault();
        console.log(user);
    }
    
    return (
        <>
        {/* <pre>{JSON.stringify(user)}</pre> */}
            <div className="bg-blue-100 mt-5 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={e => submitRegister(e)} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            value={user.username}
                            name="username"
                            onChange={e => handleInput(e)}
                            type="text" id="username"
                            className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your username"/>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                           
                            type="email" id="email"
                            value={user.email}
                            onChange={e => handleInput(e)}
                            name="email"
                            className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="you@example.com"/>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                             value={user.password}
                             onChange={e => handleInput(e)}
                             name="password"
                            type="password" id="password"
                            className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your password"/>
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                           name="role"
                           onChange={e => handleInput(e)}
                            id="role"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="guest">Guest</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <input
                        name="terms"
                            onChange={e => handleTerms(e)}
                            id="terms" type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the terms and
                            conditions</label>
                    </div>

                    <div>
                        <button disabled={!user.terms} type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-500">Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};
export default RegisterUser;