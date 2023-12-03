import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import { removeUserData } from '../../utils/localStorage';
import useModal from '../../hooks/useModal';
import { isLoggedIn } from '../../utils/userStatus';
import '../../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const { showModal: showLoginModal, openModal: openLoginModal, closeModal: closeLoginModal } = useModal();
  const { showModal: showRegisterModal, openModal: openRegisterModal, closeModal: closeRegisterModal } = useModal();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogout = () => {
    removeUserData();
    navigate('/');
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
            Home
          </NavLink>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto" onClick={closeNavbar}>
              {isLoggedIn() && (
                <li className="nav-item">
                  <NavLink className="nav-lin profile-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              )}
              {!isLoggedIn() && (
                <li className="nav-item">
                  <button className="native-button me-2" onClick={openLogin}>
                    Login
                  </button>
                  <button className="native-button" onClick={openRegister}>
                    Register
                  </button>
                </li>
              )}
              {isLoggedIn() && (
                <li className="nav-item">
                  <button className="cancel-button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showLoginModal && <LoginModal onClose={closeLoginModal} onToggle={openRegisterModal} />}
      {showRegisterModal && <RegisterModal onClose={closeRegisterModal} onToggle={openLoginModal} />}
    </header>
  );
}

export default Header;
