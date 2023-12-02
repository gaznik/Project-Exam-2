import { useState } from 'react';
import { useForm } from 'react-hook-form';
import handleLogin from '../services/handlers/loginHandler';

const useLoginForm = () => {
  const { handleSubmit, control } = useForm();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoggingIn(true);
      await handleLogin(data);
      setIsLoggingIn(false);
    } catch (error) {
      setIsLoggingIn(false);
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    isLoggingIn,
  };
};

export default useLoginForm;
