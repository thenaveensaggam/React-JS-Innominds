import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PageLoader from "../ui/PageLoader.jsx";
import UserService from "../services/userService.js";

const UserItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // console.log(fetcher);
  let name = searchParams.get("name");

  const [state, setState] = useState({
    loading: false,
    user: null,
    errorMessage: null,
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    if (params.userId) {
      const getUser = async () => {
        try {
          let response = await UserService.getUser(params.userId);
          setState({ ...state, loading: false, user: response.data });
        } catch (e) {
          setState({ ...state, loading: false, errorMessage: e.message });
        }
      };
      getUser();
    }
  }, [params.userId]);

  const { loading, user, errorMessage } = state;

  const backToUsers = () => {
    navigate("/users");
  };

  return (
    <>
      <pre>{name}</pre>
      <section className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl font-bold mb-6 text-green-500">
            Welcome to UserItem Page
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover amazing features and unparalleled support to help you
            achieve your goals. Join us today and be part of an exciting
            journey.
          </p>
          <button
            onClick={backToUsers}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Back to Users
          </button>
        </div>

        {loading ? (
          <PageLoader />
        ) : (
          <>
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  User Item
                </h2>
                {user && (
                  <ul className="list-disc pl-5 text-gray-600">
                    <li className="mb-1">Id - {user.id}</li>
                    <li className="mb-1">Name - {user.name}</li>
                    <li className="mb-1">Email - {user.email}</li>
                    <li className="mb-1">City - {user.address.city}</li>
                    <li className="mb-1">Street - {user.address.street}</li>
                  </ul>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};
export default UserItem;
