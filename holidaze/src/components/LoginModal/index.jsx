import React from 'react';
import LoginForm from './LoginForm'; 

function LoginModal({ onClose }) {
  return (
    <div>
      <div>
        <button onClick={onClose}>Close</button>
      </div>
      <div>
        <h1>Login</h1>
        <LoginForm /> 
      </div>
    </div>
  );
}

export default LoginModal;
