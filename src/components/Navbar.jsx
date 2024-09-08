import React, { useState } from "react";
import './css/Navbar.css'; // Importing the CSS file
import logo from './images/logo.png'; // Adjust path as needed

function Navbar({ setCurrentPage }) {
  // State to manage whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="icon phone-btn">
        <i className="fa-solid fa-phone"></i>
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {/* Apply active class when menu is open */}
      <ul id="sidemenu" className={`menu-list ${menuOpen ? 'active' : ''}`}>
        <div className="icon cancel-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
        <li><a href="#services" onClick={() => setCurrentPage('services')}>Services</a></li>
        <li><a href="#about" onClick={() => setCurrentPage('about')}>About</a></li>
        <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a></li>
        <button>CALL NOW</button>
      </ul>
      <div className="icon menu-btn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
