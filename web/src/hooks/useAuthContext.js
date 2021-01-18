import { React, useContext } from 'react';
import { AuthContext } from './../contexts/AuthContext/AuthState';

export const useAuthContext = () => {
  return useContext(AuthContext);
};
