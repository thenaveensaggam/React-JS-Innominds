import React, { useEffect, useState } from "react";
import LayoutHeading from "../../components/LayoutHeading";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react"; // replacing Bootstrap icon
import { ContactService } from "../../services/ContactService";
import LoadingSpinner from "../../components/LoadingSpinner";
import { GroupService } from "../../services/GroupService";

const ViewContact = () => {
  const { contactId } = useParams();

  const [group, setGroup] = useState(null);

  const [state, setState] = useState({
    loading: false,
    contact: null,
    error: null,
  });

  const getContactFromServer = async (contactId) => {
    try {
      const response = await ContactService.getContactById(contactId);
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
    }
  }, [state.contact]);

  const { loading, error, contact } = state;

  return (
    <>
      <LayoutHeading heading={"View Contact"} color={"text-yellow-500"} />
      {loading && !error && <LoadingSpinner />}

      {!loading && contact && Object.keys(contact).length > 0 && (
        <section className="max-w-6xl mx-auto mt-6 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Contact Image */}
            <div className="flex-shrink-0">
              <img
                alt="Contact"
                src={contact.imageUrl}
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Contact Details */}
            <div className="flex-1 w-full">
              <ul className="divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white shadow">
                <li className="px-4 py-3">
                  Name : <span className="font-semibold">{contact.name}</span>
                </li>
                <li className="px-4 py-3">
                  Mobile :{" "}
                  <span className="font-semibold">{contact.mobile}</span>
                </li>
                <li className="px-4 py-3">
                  Email : <span className="font-semibold">{contact.email}</span>
                </li>
                <li className="px-4 py-3">
                  Company :{" "}
                  <span className="font-semibold">{contact.company}</span>
                </li>
                <li className="px-4 py-3">
                  Title : <span className="font-semibold">{contact.title}</span>
                </li>
                {group && (
                  <li className="px-4 py-3">
                    Group : <span className="font-semibold">{group.name}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/contacts/admin"
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow hover:bg-yellow-600 transition"
            >
              <ArrowLeftCircle className="w-5 h-5" />
              Back
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewContact;
