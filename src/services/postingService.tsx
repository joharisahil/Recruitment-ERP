// src/services/postingService.js
import axios from 'axios';

const BASE_URL = 'https://recruitmentsystem.onrender.com/api/portal';

export const createPortal = async (portalData: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/createPortal`, {
      RequestMap: portalData,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating portal:', error);
    throw error; // Propagate the error for handling in the component
  }
};
