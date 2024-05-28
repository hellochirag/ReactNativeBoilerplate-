import React, {createContext, ReactNode} from 'react';
import axios, {AxiosInstance} from 'axios';
import {AppConstants} from '../constants';

// Create a new Axios instance
const apiInstance: AxiosInstance = axios.create({
  baseURL: AppConstants.BASE_URL, // Replace with your API base URL
  timeout: 55000, // Set a timeout value if desired
  headers: {
    // Set custom headers here
    //Authorization: 'Bearer YourAccessToken',
    'Content-Type': 'application/json',
  },
});

// Create a context for the API instance
export const APIContext = createContext(apiInstance);

// Define the type for the props of the AxiosNetworkProvider component
type AxiosNetworkProviderProps = {
  children: ReactNode;
};

// Create a provider component to wrap your app
export const AxiosNetworkProvider: React.FC<AxiosNetworkProviderProps> = ({
  children,
}) => {
  return (
    <APIContext.Provider value={apiInstance}>{children}</APIContext.Provider>
  );
};
