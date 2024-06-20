import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { useAuth } from '../context/authContext';


const SignUp = () => {
  const { signUp } = useAuth();

    return <SignUpForm onSignUp={signUp}/>
  };
  
  export default SignUp;
  