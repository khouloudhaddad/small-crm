import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api', // Adjust the base URL as needed
});

export const fetchContacts = async () => {
    const response = await apiClient.get('/contacts');
    return response.data;
};

export const fetchLeads = async () => {
    const response = await apiClient.get('/leads');
    return response.data;
};

// Add more API functions as needed
