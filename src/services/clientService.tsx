import axios from 'axios';

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
