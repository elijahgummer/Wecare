import React from "react";
import './css/Navbar.css'; // Importing the CSS file
import logo from './images/logo.png'; // Adjust path as needed
function Navbar() {
  return (
    <nav className="navbar">
      <div className="icon phone-btn">
        <i className="fa-solid fa-phone"></i>
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul id="sidemenu" className="menu-list">
        <div className="icon cancel-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <button>CALL NOW</button>
      </ul>
      <div className="icon menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
export default Navbar;
