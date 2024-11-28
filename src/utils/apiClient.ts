// utils/apiClient.ts
import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://user-auth-pastprep-cjeteccrfdbmf3e7.canadacentral-01.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;