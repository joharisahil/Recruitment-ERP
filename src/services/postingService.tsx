import axios from 'axios';

export interface Portal {
  portalToken: string;
  portal: string;
  SPOC: string;
  jobInventory: string;
  inventoryStartDate: string;
  inventoryEndDate: string;
}

export interface Recruiter {
  token: string;
  EmailId_Official: string;
}

export interface Posting {
  postingId: number;
  portalToken: string;
  subject: string;
  assignedTo: string;
  permittedRefresh: string;
}

//API for creating a new portal
export const createPortal = async (portalData: any) => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/portal/createPortal',
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

//API to fetch list of all portals
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

// Create a posting
export const createPosting = async (payload: {
  RequestMap: {
    portalToken: string;
    subject: string;
    assignedTo: string;
    permittedRefresh: string;
  };
}): Promise<void> => {
  try {
    await axios.post(
      'https://recruitmentsystem.onrender.com/api/portal/createPosting',
      payload,
    );
  } catch (error) {
    console.error('Error creating posting:', error);
    throw error;
  }
};

//API for getting posting list in view portals
export const getPostingsByPortal = async (portalToken: string): Promise<Posting[]> => {
  try {
    const response = await axios.post('https://recruitmentsystem.onrender.com/api/portal/getPosting', {
      RequestMap: { portalToken },
    });
    if (response.data.SuccessMessage) {
      console.log(response.data.SuccessMessage); // Log success message
    }
    return response.data.Data || [];
  } catch (error) {
    console.error('Error fetching postings:', error);
    throw error;
  }
};