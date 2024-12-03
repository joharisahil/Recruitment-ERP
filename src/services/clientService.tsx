import axios from 'axios';

interface ClientResponse {
  SuccessMessage: string;
  Data: {
    clientName: string;
    clientToken: string;
    activeFlag: string;
    Profiles: Array<{
      address: string;
      accountManager: string;
      spoc: string;
      interviewType: string;
      billingPoint: string;
      profile: string;
      lockInPeriod: string;
      location: string;
      interviewTiming: string;
      hiringParameter: string;
      joiningPoint: string;
    }>;
  };
}

//API for creating Client
export const createClient = async (payload: object) => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/admin/createClient',
      payload,
    );
    return response.data; // Return the success response
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        'Failed to create client. Please try again.',
    );
  }
};

//API for fetching all client details
export const getAllClients = async () => {
  try {
    const response = await axios.get(
      `https://recruitmentsystem.onrender.com/api/admin/getAllClients`,
    );
    return response.data.Data; // Return only the client data array
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};

//API to fetch a particular client details
export const getClientDetails = async (
  clientToken: string,
): Promise<ClientResponse> => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/admin/getClient',
      {
        RequestMap: {
          clientToken: clientToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching client details:', error);
    throw error;
  }
};
