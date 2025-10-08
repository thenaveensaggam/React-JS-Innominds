import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-400">
              React Router
            </Link>
          </div>

          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-400">
              Counter
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              Product
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Shopping Cart
            </Link>
            <Link to="/users" className="hover:text-gray-400">
              Users
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
