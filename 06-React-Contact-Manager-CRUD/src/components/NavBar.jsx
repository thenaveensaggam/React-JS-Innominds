import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-cyan-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <h1 className="text-xl font-bold text-white">
                React Contact Manager
              </h1>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex sm:space-x-6">
            <Link
              to="/contacts/admin"
              className="text-white hover:text-gray-200 transition"
            >
              Contacts
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
