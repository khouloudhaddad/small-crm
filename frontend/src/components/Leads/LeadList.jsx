import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeadList = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        const fetchLeads = async () => {
            const response = await axios.get('http://localhost:8000/api/leads'); // Adjust the API endpoint as needed
            setLeads(response.data);
        };
        fetchLeads();
    }, []);

    return (
        <div>
            <h2>Lead List</h2>
            {leads.length === 0 ? (
                <p>No leads available.</p>
            ) : (
                <ul>
                    {leads.map(lead => (
                        <li key={lead.id}>{lead.name} - Status: {lead.status}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LeadList;
