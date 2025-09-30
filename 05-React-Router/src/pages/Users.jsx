import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <>
            <div className="jumbotron h-screen flex items-center justify-center text-center">
                <div className=" bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Users Page</h1>
                    <p className="text-xl md:text-2xl mb-6">Your journey to amazing experiences starts here.</p>
                    <a href="#"
                       className="bg-amber-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200">
                        Get Started
                    </a>
                    <ul className='mt-3'>
                        <li className="bg-purple-300 text-xl p-2 m-1">
                            <Link to={`/users/1`}>User 1</Link>
                        </li>
                        <li className="bg-purple-300 text-xl p-2 m-1">User 2</li>
                        <li className="bg-purple-300 text-xl p-2 m-1">User 3</li>
                    </ul>
                </div>
            </div>

        </>
    )
};
export default Users;