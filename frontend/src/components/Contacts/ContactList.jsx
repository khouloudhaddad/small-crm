import React, { useEffect, useState } from "react";
import axios from "axios";
import AddContact from "./AddContact";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const fetchContacts = async () => {
    const response = await axios.get("http://localhost:8000/api/contacts"); // Adjust the API endpoint as needed
    setContacts(response.data);
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to handle adding a new contact
  const handleAddContact = async (newContact) => {
    try {
      await axios.post("http://localhost:8000/api/contacts", newContact);
      fetchContacts(); // Refresh the contacts list after adding a new contact
      handleClose(); // Close the modal
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row bg-light align-items-center p-2 mb-4">
        <h1 className="col-md-10">Contact List</h1>
        <button onClick={handleShow} 
        className="btn btn-primary col-md-2 d-flex align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg> 
          <span className="ms-1">Contact</span>
        </button>
      </div>
      <div className="row">
        <div className="col-12">
          {contacts.length === 0 ? (
            <p>No contacts available.</p>
          ) : (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.name} - {contact.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Add Contact Modal */}
      <AddContact showModal={showModal} handleClose={handleClose} onAdd={handleAddContact} />
    </div>
  );
};

export default ContactList;
