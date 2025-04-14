// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="lux-navbar">
      <h1 className="navbar-title">The Vault</h1>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Butler</Link></li>
        <li className={location.pathname === '/vault' ? 'active' : ''}><Link to="/vault">Gallery</Link></li>
        <li className={location.pathname === '/command' ? 'active' : ''}><Link to="/command">Command</Link></li>
        <li className={location.pathname === '/resume' ? 'active' : ''}><Link to="/resume">Résumé</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
