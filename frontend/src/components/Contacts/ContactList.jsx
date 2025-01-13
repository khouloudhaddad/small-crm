import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await axios.get('http://localhost:8000/api/contacts'); // Adjust the API endpoint as needed
            setContacts(response.data);
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h2>Contact List</h2>
            {contacts.length === 0 ? (
                <p>No contacts available.</p>
            ) : (
                <ul>
                    {contacts.map(contact => (
                        <li key={contact.id}>{contact.name} - {contact.email}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;
