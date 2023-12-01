import { useState } from 'react';
import registerHandler from '../components/RegisterModal/registerHandler';

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
  };
}

export default useRegistration;
