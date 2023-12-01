import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import { retrieveAccessToken, removeUserData } from '../../utils/localStorage';
import useModal from '../../hooks/useModal';

function Header() {
  const navigate = useNavigate();
  const { showModal: showLoginModal, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
  const { showModal: showRegisterModal, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
  const isLoggedIn = !!retrieveAccessToken();

  const handleLogout = () => {
    removeUserData();
    navigate('/'); // Redirect to the homepage
  };

  const openLogin = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const openRegister = () => {
    closeLoginModal();
    openRegisterModal();
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
          {!isLoggedIn && (
            <li>
              <button onClick={openLogin}>Login</button>
              <button onClick={openRegister}>Register</button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {showLoginModal && (
        <LoginModal onClose={closeLoginModal} onToggle={openRegisterModal} />
      )}
      {showRegisterModal && (
        <RegisterModal onClose={closeRegisterModal} onToggle={openLoginModal} />
      )}
    </header>
  );
}

export default Header;
