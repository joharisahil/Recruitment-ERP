import axios from 'axios';

//API for creating Client
export const createClient = async (payload: object) => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/admin/createClient',
      payload
    );
    return response.data; // Return the success response
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to create client. Please try again.'
    );
  }
};

//API for fetching all client details
export const getAllClients = async () => {
  try {
    const response = await axios.get(`https://recruitmentsystem.onrender.com/api/admin/getAllClients`);
    return response.data.Data; // Return only the client data array
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};