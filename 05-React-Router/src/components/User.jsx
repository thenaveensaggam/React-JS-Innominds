
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const {userId} = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/users");
    };
    
    return (
        <>
            <div className="jumbotron h-screen flex items-center justify-center text-center">
                <div className=" bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome User with Id : {userId}</h1>
                    <p className="text-xl md:text-2xl mb-6">Your journey to amazing experiences starts here.</p>
                    <button onClick={goBack}
                       className="bg-amber-700 cursor-pointer hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200">
                        Back
                    </button>
                </div>
            </div>

        </>
    )
};
export default User;