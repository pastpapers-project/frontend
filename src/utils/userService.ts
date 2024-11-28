// services/userService.ts
import apiClient from '../utils/apiClient';
import { UserData } from '../types/user';
import { PastPaper, SavePaper } from '@/types/paper';

export const createUser = async (userData: UserData): Promise<UserData> => {
  const response = await apiClient.post('/users', userData);
  console.log('user created')
  return response.data;
};

export const getUser = async (userId: string): Promise<UserData> => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async (userId: string, userData: UserData): Promise<UserData> => {
  const response = await apiClient.put(`/users/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId: string): Promise<void> => {
  await apiClient.delete(`/users/${userId}`);
};

export const loginUser = async (userId: string, displayName: string, email: string, customerType: string): Promise<void> => {
  const response = await apiClient.put(`/users/${userId}/login`, {
    user_id: userId,
    display_name: displayName,
    email: email,
    customer_type: customerType
  });
};

// Function to add a saved paper for a user
export const addSavedPaper = async (userId: string, paper: SavePaper): Promise<any> => {
  const response = await apiClient.put(`/users/${userId}/add_saved_paper`, paper);
  return response.data;
};

// Function to get all saved papers for a user
export const getSavedPapers = async (userId: string): Promise<any> => {
  const response = await apiClient.get(`/users/${userId}/saved_papers`);
  return response.data;
};
