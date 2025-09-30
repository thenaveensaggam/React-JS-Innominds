import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <nav className="bg-cyan-800 shadow text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <h1 className="text-xl font-bold text-white">React Router</h1>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to="/" className="text-white hover:text-gray-900">Home</Link>
                                    <Link to="/about" className="text-white hover:text-gray-900">About</Link>
                                    <Link to="/contact" className="text-white hover:text-gray-900">Contact</Link>
                                    <Link to="/users" className="text-white hover:text-gray-900">Users</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;