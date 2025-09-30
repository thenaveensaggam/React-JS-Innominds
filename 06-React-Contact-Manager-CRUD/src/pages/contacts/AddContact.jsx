import React, { useState, useEffect } from "react";
import LayoutHeading from "../../components/LayoutHeading";
import { Link, useNavigate } from "react-router-dom";
import { GroupService } from "../../services/GroupService";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ContactService } from "../../services/ContactService";

const AddContact = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: false,
    error: null,
    groups: [],
  });

  const [contact, setContact] = useState({
    name: "",
    imageUrl: "",
    mobile: "",
    email: "",
    company: "",
    title: "",
    groupId: "",
  });

  const getGroupsFromServer = async () => {
    try {
      const response = await GroupService.getAllGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data,
      });
    } catch (e) {
      setState({
        ...state,
        loading: false,
        error: e,
      });
    }
  };

  useEffect(() => {
    setState({ ...state, loading: true });
    getGroupsFromServer();
  }, []);

  const handleForm = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const submitAddForm = async (e) => {
    e.preventDefault();
    try {
      if (contact) {
        const response = await ContactService.createContact(contact);
        if (response.data) {
          navigate("/contacts/admin");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { loading, error, groups } = state;

  return (
    <>
      {/* <pre>{JSON.stringify(contact)}</pre> */}
      <LayoutHeading heading={"Add Contact"} color={"text-green-600"} />

      {loading && !error && <LoadingSpinner />}

      {!loading && (
        <div className="max-w-6xl mx-auto mt-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <form
              onSubmit={(e) => submitAddForm(e)}
              className="bg-white shadow-lg rounded-xl p-6 space-y-4"
            >
              <input
                required
                name="name"
                value={contact.name}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                required
                name="imageUrl"
                value={contact.imageUrl}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                required
                name="email"
                value={contact.email}
                onChange={(e) => handleForm(e)}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                required
                name="mobile"
                value={contact.mobile}
                onChange={(e) => handleForm(e)}
                type="number"
                placeholder="Mobile"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                required
                name="company"
                value={contact.company}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                required
                name="title"
                value={contact.title}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <select
                required
                name="groupId"
                value={contact.groupId}
                onChange={(e) => handleForm(e)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="">Select a Group</option>
                {groups.map((group) => {
                  return (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  );
                })}
              </select>

              <div className="flex items-center space-x-4">
                <input
                  type="submit"
                  value="Create"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                />
                <Link
                  to="/contacts/admin"
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
                >
                  Cancel
                </Link>
              </div>
            </form>

            {/* Image Preview */}
            <div className="flex justify-center items-start">
              <img
                src={contact.imageUrl}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddContact;
