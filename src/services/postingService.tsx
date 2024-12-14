import axios from 'axios';

export interface Portal {
    PortalId: string; // Adjust the type (string/number) based on your actual data
    portal: string;   // Adjust this based on your API response
  }

//API for creating a new portal
export const createPortal = async (portalData: any) => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/portal',
      {
        RequestMap: portalData,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error creating portal:', error);
    throw error;
  }
};

export const getAllPortals = async () => {
    try {
      const response = await axios.get("https://recruitmentsystem.onrender.com/api/portal/getAllPortals");
      return response.data.Data as Portal[];; // Return the array of portal objects
    } catch (error) {
      console.error("Error fetching portals:", error);
      throw error; // Rethrow the error for handling in the component
    }
  };