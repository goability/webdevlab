import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={reactLogo} alt="React Logo" className="logo-img" />
        </Link>

        <div className="navbar-menu">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
