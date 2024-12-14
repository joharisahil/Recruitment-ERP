import axios from 'axios';

export interface Portal {
  PortalId: string; // Adjust the type (string/number) based on your actual data
  portal: string; // Adjust this based on your API response
}

export interface Recruiter {
  token: string; // Adjust the type (string/number) based on your actual data
  FirstName: string; // Adjust this based on your API response
  LastName: string;
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

//API to fetch list if all portals
export const getAllPortals = async () => {
  try {
    const response = await axios.get(
      'https://recruitmentsystem.onrender.com/api/portal/getAllPortals',
    );
    return response.data.Data as Portal[]; // Return the array of portal objects
  } catch (error) {
    console.error('Error fetching portals:', error);
    throw error; // Rethrow the error for handling in the component
  }
};

//API to fetch the list of recruiters
export const fetchRecruiters = async () => {
  try {
    const response = await axios.get(
      'https://recruitmentsystem.onrender.com/api/admin/getAllOnBoardRecruiters',
    );
    if (response.data && response.data.Data) {
      return response.data.Data as Recruiter[]; // Returning the "Data" array from the API response
    } else {
      throw new Error('No data found in API response');
    }
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch recruiters');
  }
};
