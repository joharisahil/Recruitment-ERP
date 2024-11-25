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
  firstName: string;
  lastName: string;
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

interface SaveRecruiterPayload {
  RequestMap: {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    mobileNoPersonal: string;
    mobileNoOfficial: string;
    dateOfBirth: string;
    gender: string;
    bankName: string;
    bankBranch: string;
    accountNo: string;
    ifscCode: string;
    panNumber: string;
    aadhaarNumber: string;
    previousCompanyName: string;
    previousJobTitle: string;
    totalExp: string;
    totalRecruitmentExp: string;
    lastJoinDate: string;
    lastWorkingDate: string;
  };
}

interface DisplayRecruiterResponse {
  Data: {  
    "lastName": string;
    "previousCompanyName": string;
    "address": string;
    "mobileNoPersonal": string;
    "education": string;
    "gender": string;
    "bankBranch": string;
    "previousJobTitle": string;
    "lastWorkingDate": string;
    "dateOfBirth": string;
    "bankName": string;
    "panNumber": string;
    "totalExp": string;
    "firstName": string;
    "lastJoinDate": string;
    "aadhaarNumber": string;
    "educationPercent": string;
    "mobileNoOfficial": string;
    "accountNo": string;
    "emailIdPersonal": string;
    "totalRecruitmentExp": string;
    "ifscCode": string;
  }
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

// API to submit the recruiter onboarding form recruiter side
export const saveRecruiter = async (payload: SaveRecruiterPayload): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(
      'https://recruitmentsystem.onrender.com/api/recruiters/saveRecruiter',
      payload
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to save recruiter details.');
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred.');
    }
  }
};

// API to fetch recruiter onboarding details by token to display on DisplayOnboardingForm
export const getRecruiterDetailsByToken = async (token: string): Promise<DisplayRecruiterResponse['Data']> => {
  try {
    const response = await axios.post<DisplayRecruiterResponse>(
      'https://recruitmentsystem.onrender.com/api/recruiters/getFilledRecruiter',
      {
        RequestMap: { token },
      }
    );
    return response.data.Data;
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
