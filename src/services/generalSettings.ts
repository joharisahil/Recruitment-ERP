import axios from 'axios';

// Add Interview Status API
export const addInterviewStatus = async (statusList: any[]) => {
  try {
    const response = await axios.post(
      'https://recruitmentsystem.onrender.com/api/dropdown/addInterviewStatus',
      {
        RequestMap: {
          statusList: statusList.map((status) => ({ status })),
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      throw String(error);
    }
  }
};

// Get Interview Status List API
export const getInterviewStatusList = async () => {
  try {
    const response = await axios.get(
      'https://recruitmentsystem.onrender.com/api/dropdown/getInterviewStatusList'
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      throw String(error);
    }
  }
};
