import React from 'react';
import RegisterUserForm from './RegisterUserForm'; 
function RegisterModal({ onClose }) {
  return (
    <div>
      <div>
        <button onClick={onClose}>Close Modal</button>
      </div>
      <div>
        <h1>Registration Form</h1>
        <RegisterUserForm /> 
      </div>
    </div>
  );
}

export default RegisterModal;
