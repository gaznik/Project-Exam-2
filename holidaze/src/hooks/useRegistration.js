import { useState } from 'react';
import registerHandler from '../services/handlers/registerHandler';

function useRegistration() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const register = async (userData) => {
    try {
      setIsRegistering(true);
      const registrationResult = await registerHandler(userData);
      setIsRegistering(false);
      return registrationResult;
    } catch (error) {
      setIsRegistering(false);
      setRegistrationError(error);
      return null;
    }
  };

  return {
    isRegistering,
    registrationError,
    register,
    setIsRegistering, // Add this setter function to manage isRegistering state
  };
}

export default useRegistration;
