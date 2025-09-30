import React from 'react';

const About = () => {
    return (
        <>
            <div className="jumbotron h-screen flex items-center justify-center text-center">
                <div className=" bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">About Our Page</h1>
                    <p className="text-xl md:text-2xl mb-6">Your journey to amazing experiences starts here.</p>
                    <a href="#"
                       className="bg-green-600 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-200">
                        Get Started
                    </a>
                </div>
            </div>
        </>
    )
};
export default About;