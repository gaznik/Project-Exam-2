import React from 'react';
import RegisterUserForm from './RegisterUserForm';

function RegisterModal({ onClose, onToggle }) {
  const switchToLogin = () => {
    onClose(); 
    onToggle(); 
  };

  return (
    <div>
      <div>
        <h1>Registration Form</h1>
        <RegisterUserForm />
        <button onClick={switchToLogin}>Login here</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RegisterModal;
