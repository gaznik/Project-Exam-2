import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal'; 

function Header() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={openRegisterModal}>Register</button>
          </li>
          <li>
            <button onClick={openLoginModal}>Login</button> 
          </li>
        </ul>
      </nav>
      {showRegisterModal && <RegisterModal onClose={closeRegisterModal} />}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />} 
    </header>
  );
}

export default Header;
