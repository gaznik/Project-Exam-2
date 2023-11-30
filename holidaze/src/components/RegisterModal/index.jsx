import React, { useState } from 'react';
import { registerUser } from './registerApiHandler';

function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatarUrl: '', 
    isVenueManager: false, 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('Registration successful:', response);
      onClose(); 
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            Avatar/Image URL:
            <input type="text" name="avatarUrl" value={formData.avatarUrl} onChange={handleChange} />
          </label>
          <label>
            Register as Venue Manager?
            <input
              type="checkbox"
              name="isVenueManager"
              checked={formData.isVenueManager}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
