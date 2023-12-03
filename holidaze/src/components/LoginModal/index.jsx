import React from 'react';
import LoginForm from './LoginForm';
import '../../styles/modal.css';

function LoginModal({ onClose, onToggle }) {
  const switchToRegister = () => {
    onClose();
    onToggle();
  };

  return (
    <div className="modal" backdrop="static" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-overlay"></div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <LoginForm />
          </div>
          <div className="modal-footer">
            <button type="button" className="switch-button" onClick={switchToRegister}>Register here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
