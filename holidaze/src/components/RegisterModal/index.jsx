import React from 'react';
import RegisterUserForm from './RegisterUserForm';
import '../../styles/modal.css';

function RegisterModal({ onClose, onToggle }) {
  const switchToLogin = () => {
    onClose();
    onToggle();
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-overlay"></div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Registration Form</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <RegisterUserForm />
          </div>
          <div className="modal-footer">
            <button type="button" className="switch-button" onClick={switchToLogin}>Login here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
