import React from 'react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/authContext';

const LogIn = () => {
  const { login } = useAuth();


  return <LoginForm onLogin={login} />;
  
};

export default LogIn;
