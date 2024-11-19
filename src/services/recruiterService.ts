import axios from 'axios';

interface ApiResponse {
  SuccessMessage: string;
  token: string;
}

interface RequestPayload {
  RequestMap: {
    firstName: string;
    lastName: string;
    emailId: string;
  };
}

export const addRecruiter = async (payload: RequestPayload): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>('https://recruitmentsystem.onrender.com/api/admin/createRecruiter', payload);
    return response.data;
  } catch (error) {
    // Narrow down the error type
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Something went wrong with the API.');
    } else if (error instanceof Error) {
      // Handle generic errors
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      // Handle unknown errors
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred.');
    }
  }
};
