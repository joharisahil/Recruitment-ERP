import axios from 'axios';

interface ApiResponse {
    SuccessMessage: string;
    token: string;
  }

interface SaveCandidatePayload {
    RequestMap: {
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        gender: string,
        address: string,
        emailId: string,
        mobileNo: string,
        qualification: string,
        educationPercent: string,
        experience: string,
        totalExperience: string,
        aadhaarNumber: string,
        panNumber: string,
        previousCompanyName: string,
        previousJobTitle: string,
        totalExp: string,
        preferredJob: string,
        lastJoinDate: string,
        lastLeavingDate: string
    };
  }

  interface DisplayCandidateResponse {
    Data: {  
     CandidateToken: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        gender: string,
        address: string,
        emailId: string,
        mobileNo: string,
        qualification: string,
        educationPercent: string,
        experience: string,
        totalExperience: string,
        aadhaarNumber: string,
        panNumber: string,
        previousCompanyName: string,
        previousJobTitle: string,
        totalExp: string,
        preferredJob: string,
        lastJoinDate: string,
        lastLeavingDate: string,
    }
  }  

//API to add candidates
export const saveCandidate = async (payload: SaveCandidatePayload): Promise<ApiResponse> => {
    try {
      const response = await axios.post<ApiResponse>(
        'https://recruitmentsystem.onrender.com/api/interview/createCandidate',
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

//API to fetch the list of candidates
export const fetchCandidates = async () => {
    try {
      const response = await axios.get('https://recruitmentsystem.onrender.com/api/interview/getAllCandidates');
      if (response.data && response.data.Data) {
        return response.data.Data; // Returning the "Data" array from the API response
      } else {
        throw new Error('No data found in API response');
      }
    } catch (error: any) {
      throw new Error(error.message || 'Failed to fetch candidates');
    }
  };  

// API to fetch candidate onboarding details by token 
export const getCandidateDetailsByToken = async (candidateToken: string): Promise<DisplayCandidateResponse['Data']> => {
  try {
    const response = await axios.post<DisplayCandidateResponse>(
      'https://recruitmentsystem.onrender.com/api/interview/getCandidate',
      {
        RequestMap: { candidateToken },
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