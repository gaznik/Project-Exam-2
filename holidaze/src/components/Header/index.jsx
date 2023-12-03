import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import { removeUserData } from '../../utils/localStorage';
import useModal from '../../hooks/useModal';
import { isLoggedIn } from '../../utils/userStatus';

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {isLoggedIn() && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
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
                  <button className="btn btn-danger" onClick={handleLogout}>
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
