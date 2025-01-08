import axios from 'axios';

const api = axios.create({
  baseURL: 'https://recruitmentsystem.onrender.com/api',
  withCredentials: true, // Ensures httpOnly cookies are sent
});

export default api;
