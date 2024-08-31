import React from "react";
import './css/Navbar.css'; // Importing the CSS file
import logo from './images/logo.png'; // Adjust path as needed
function Navbar() {
  return (
    <nav class="navbar">
      <div className="icon phone-btn">
        <i className="fa-solid fa-phone"></i>
      </div>
      <div className="logo-container">
        <img class="logo" src={logo} alt="logo" />
      </div>
      <ul id="sidemenu" class="menu-list">
        <div class="icon cancel-btn">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="articles.html">Articles</a></li>
        <li><a href="contact.html">Contact</a></li>
        <button>CALL NOW</button>
      </ul>
      <div class="icon menu-btn">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
}
export default Navbar;
