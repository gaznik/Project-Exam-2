import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import { removeUserData } from '../../utils/localStorage'; 
import useModal from '../../hooks/useModal';
import { isLoggedIn } from '../../services/api/auth/isLoggedIn'; 

function Header() {
  const navigate = useNavigate();
  const { showModal: showLoginModal, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
  const { showModal: showRegisterModal, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();

  const handleLogout = () => {
    removeUserData();
    navigate('/'); 
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
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          {isLoggedIn() && ( 
            <li>
              <NavLink to="/profile" activeClassName="active">
                Profile
              </NavLink>
            </li>
          )}
          {!isLoggedIn() && ( 
            <li>
              <button onClick={openLogin}>Login</button>
              <button onClick={openRegister}>Register</button>
            </li>
          )}
          {isLoggedIn() && ( 
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
