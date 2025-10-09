import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userFeatureKey } from "../redux/users/users.slice";

const UsersRedux = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get data from redux store
  const usersState = useSelector((state) => state[userFeatureKey]);

  const { users, loading, errorMessage } = usersState;

  useEffect(() => {
    dispatch(userActions.getAllUsersAction());
  }, []);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl font-bold mb-6 text-green-500">
            Welcome to Users Page
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover amazing features and unparalleled support to help you
            achieve your goals. Join us today and be part of an exciting
            journey.
          </p>
          <button
            onClick={backToHome}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">User Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  ID
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td className="px-6 py-4 border-b text-sm text-gray-700">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 border-b text-sm text-gray-700">
                        <Link
                          to={`/users/${user.id}`}
                          className="text-blue-500"
                        >
                          {user.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 border-b text-sm text-gray-700">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 border-b text-sm text-gray-700">
                        {user.address.city}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default UsersRedux;
