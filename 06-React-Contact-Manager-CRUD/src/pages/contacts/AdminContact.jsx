import React, { useEffect, useState } from "react";
import LayoutHeading from "../../components/LayoutHeading";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash } from "lucide-react"; // Using lucide-react icons instead of Bootstrap icons
import DeleteConfirmationPopup from "../../components/DeleteConfirmationPopUp";
import { ContactService } from "../../services/ContactService";
import LoadingSpinner from "../../components/LoadingSpinner";

const AdminContact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [state, setState] = useState({
    loading: false,
    error: null,
    contacts: [],
  });

  const getContactsFromServer = async () => {
    try {
      const response = await ContactService.getAllContacts();
      setState({
        ...state,
        loading: false,
        contacts: response.data,
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
    getContactsFromServer();
  }, []);

  const clickDelete = (contactId) => {
    setIsPopupOpen(true);
    setContactIdToDelete(contactId);
  };

  const handleDelete = async () => {
    setIsPopupOpen(false);
    try {
      if (contactIdToDelete) {
        const response = await ContactService.deleteContact(contactIdToDelete);
        if (response.data) {
          getContactsFromServer();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const { loading, error, contacts } = state;

  return (
    <>
      <LayoutHeading
        heading={"Contacts Admin"}
        color={"text-gray-900"}
        isAddBtn
      />

      <DeleteConfirmationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleDelete}
      />
      {loading && !error && <LoadingSpinner />}

      {!loading && contacts.length > 0 && (
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card */}
            {contacts.map((contact) => {
              return (
                <div
                  key={contact.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-6">
                      {/* Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          alt="contact"
                          className="w-full h-full object-cover rounded-full shadow-lg"
                          src={contact.imageUrl}
                        />
                      </div>

                      {/* Contact Details */}
                      <div className="flex-1">
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            Name :{" "}
                            <span className="font-semibold">
                              {contact.name}
                            </span>
                          </li>
                          <li>
                            Mobile :{" "}
                            <span className="font-semibold">
                              {contact.mobile}
                            </span>
                          </li>
                          <li>
                            Email :{" "}
                            <span className="font-semibold">
                              {contact.email}
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-2">
                        <Link
                          to={`/contacts/view/${contact.id}`}
                          className="p-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        <Link
                          to={`/contacts/edit/${contact.id}`}
                          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          <Pencil className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => clickDelete(contact.id)}
                          className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* End Card */}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminContact;
