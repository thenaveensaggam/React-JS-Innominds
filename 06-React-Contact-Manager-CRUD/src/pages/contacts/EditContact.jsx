import React, { useEffect, useState } from "react";
import LayoutHeading from "../../components/LayoutHeading";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactService } from "../../services/ContactService";
import LoadingSpinner from "../../components/LoadingSpinner";
import { GroupService } from "../../services/GroupService";

const EditContact = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();

  const [groups, setGroups] = useState([]);

  const [localContact, setLocalContact] = useState({
    name: "",
    imageUrl: "",
    mobile: "",
    email: "",
    company: "",
    title: "",
    groupId: "",
  });

  const [group, setGroup] = useState(null);

  const [state, setState] = useState({
    loading: false,
    contact: null,
    error: null,
  });

  const getContactFromServer = async (contactId) => {
    try {
      const response = await ContactService.getContactById(contactId);
      const groupResponse = await GroupService.getAllGroups();
      setGroups(groupResponse.data);
      setState({
        ...state,
        loading: false,
        contact: response.data,
      });
    } catch (e) {
      setState({
        ...state,
        loading: false,
        error: e,
      });
    }
  };

  const getGroupFromServer = async (groupId) => {
    try {
      const response = await GroupService.getGroupById(groupId);
      setGroup(response.data);
    } catch (e) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (contactId) {
      setState({ ...state, loading: true });
      getContactFromServer(contactId);
    }
  }, [contactId]);

  useEffect(() => {
    if (state.contact) {
      getGroupFromServer(state.contact.groupId);
      setLocalContact({
        name: state.contact.name,
        imageUrl: state.contact.imageUrl,
        mobile: state.contact.mobile,
        email: state.contact.email,
        company: state.contact.company,
        title: state.contact.title,
        groupId: state.contact.groupId,
      });
    }
  }, [state.contact]);

  const handleForm = (e) => {
    setLocalContact({
      ...localContact,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdateForm = async (e) => {
    e.preventDefault();
    try {
      if (contact && contactId) {
        const response = await ContactService.updateContact(
          localContact,
          contactId
        );
        if (response.data) {
          navigate("/contacts/admin");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { loading, error, contact } = state;
  return (
    <>
      <LayoutHeading heading={"Edit Contact"} color={"text-blue-600"} />
      {loading && !error && <LoadingSpinner />}
      {!loading && contact && (
        <div className="max-w-6xl mx-auto mt-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <form
              onSubmit={(e) => submitUpdateForm(e)}
              className="bg-white shadow-lg rounded-xl p-6 space-y-4"
            >
              <input
                required
                name="name"
                value={localContact.name}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                required
                name="imageUrl"
                value={localContact.imageUrl}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                required
                name="email"
                value={localContact.email}
                onChange={(e) => handleForm(e)}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                required
                name="mobile"
                value={localContact.mobile}
                onChange={(e) => handleForm(e)}
                type="number"
                placeholder="Mobile"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                required
                name="company"
                value={localContact.company}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                required
                name="title"
                value={localContact.title}
                onChange={(e) => handleForm(e)}
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <select
                required
                name="groupId"
                value={localContact.groupId}
                onChange={(e) => handleForm(e)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                  value="Update"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
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
            {localContact.imageUrl && (
              <div className="flex justify-center items-start">
                <img
                  src={localContact.imageUrl}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-full shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EditContact;
