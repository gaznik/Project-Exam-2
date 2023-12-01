import React from 'react';
import LoginForm from './LoginForm';

function LoginModal({ onClose, onToggle }) {
  const switchToRegister = () => {
    onClose(); 
    onToggle(); 
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <LoginForm />
        <button onClick={switchToRegister}>Register here</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
