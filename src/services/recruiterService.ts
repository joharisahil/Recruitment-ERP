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

interface Recruiter {
  token: string;
  FirstName: string;
  LastName: string;
  EmailId: string;
  status: string;
}

interface GetAllRecruitersResponse {
  Data: Recruiter[];
}

interface RecruiterDetailResponse {
  Data: {
    firstName: string;
    lastName: string;
    EmailIdPersonal: string;
  };
}

// API to add a recruiter for onboarding form
export const addRecruiter = async (payload: RequestPayload): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      'https://recruitmentsystem.onrender.com/api/admin/createRecruiter',
      payload
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Something went wrong with the API.');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred.');
    }
  }
};

// API to fetch all recruiters onboarding list
export const getAllRecruiters = async (): Promise<Recruiter[]> => {
  try {
    const response = await axios.get<GetAllRecruitersResponse>(
      'https://recruitmentsystem.onrender.com/api/admin/getAllRecruiters'
    );
    return response.data.Data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch recruiters.');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred.');
    }
  }
};

// API to fetch recruiter firstname, lastname & email by token
export const getRecruiterByToken = async (token: string): Promise<RecruiterDetailResponse> => {
  try {
    const response = await axios.post<RecruiterDetailResponse>(
      'https://recruitmentsystem.onrender.com/api/admin/getRecruiter',
      {
        RequestMap: { token },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch recruiter details.');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred.');
    }
  }
};
