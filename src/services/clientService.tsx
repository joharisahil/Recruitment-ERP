import axios from 'axios';

export const createClient = async (formData: {
  username: string;
  activeFlag: string;
  roles: {
    profile: string;
    billingPoint: number;
    lockInPeriod: number;
    payPoint: number;
  }[];
  locations: {
    location: string;
    interviewType: string;
    address: string;
  }[];
}) => {
  try {
    const response = await axios.post(`https://recruitmentsystem.onrender.com/api/admin/createClient`, {
      RequestMap: formData,
    });
    return response.data; // Success response
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.ErrorMessage || 'An error occurred');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};
