import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal'; 

function Header() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
            <button onClick={openModal}>Register</button>
          </li>
        </ul>
      </nav>
      {showModal && <RegisterModal onClose={closeModal} />} 
    </header>
  );
}

export default Header;
