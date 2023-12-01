import React from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import useModal from '../../hooks/useModal'; // Import the custom hook
import { removeUserData } from '../../utils/localStorage'; // Import the function to remove token

function Header() {
  const { showModal: showRegisterModal, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
  const { showModal: showLoginModal, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();

  const handleLogout = () => {
    removeUserData(); // Function to remove the token from localStorage
    // Additional logic for logout if needed (e.g., redirect to login page)
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
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      {showRegisterModal && <RegisterModal onClose={closeRegisterModal} />}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
    </header>
  );
}

export default Header;
