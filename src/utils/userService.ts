// services/userService.ts
import apiClient from '../utils/apiClient';
import { UserData } from '../types/user';

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