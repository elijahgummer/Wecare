import React, { useState } from "react";
import './css/Navbar.css'; // Importing the CSS file
import logo from './images/logo.png'; // Adjust path as needed
import { useNavigate } from "react-router-dom";

function Navbar({ setCurrentPage }) {
  // State to manage whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle link click with smooth scrolling
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after navigating
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {/* Apply active class when menu is open */}
      <ul id="sidemenu" className={`menu-list ${menuOpen ? 'active' : ''}`}>
        <div className="icon cancel-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <li>
          <a href="#hero" onClick={() => navigate("/")}>HOME</a>
        </li>
        <li>
          <a href="#services" onClick={() => navigate("/services")}>SERVICES</a>
        </li>
        <li>
          <a href="#about" onClick={() => navigate("/about")}>ABOUT</a> {/* Updated the navigate path */}
        </li>
        <li>
          <a href="#contact" onClick={() => navigate("/contact")}>CONTACT</a>
        </li>
        <button onClick={() => navigate("/booking")}>BOOK NOW</button>
      </ul>
      <div className="icon menu-btn" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
export default Navbar;