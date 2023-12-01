import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import useModal from '../../hooks/useModal';
import { retrieveAccessToken, removeUserData } from '../../utils/localStorage'; 

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { showModal: showRegisterModal, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
  const { showModal: showLoginModal, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
  const isLoggedIn = !!retrieveAccessToken(); 

  const handleLogout = () => {
    removeUserData(); 
    navigate('/'); // Redirect to the homepage
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
            <>
              <li>
                <button onClick={openRegisterModal}>Register</button>
              </li>
              <li>
                <button onClick={openLoginModal}>Login</button>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {showRegisterModal && <RegisterModal onClose={closeRegisterModal} />}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
    </header>
  );
}

export default Header;
