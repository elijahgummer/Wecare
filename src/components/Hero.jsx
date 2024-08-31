import React from "react";
import './css/Hero.css'; // Importing the CSS file
import Hero-Pic from './images/Hero.png'; // Adjust path as needed
function Hero() {
    return (
        <div class="logo-container">
        <img class="logo" src={Hero-Pic} alt="logo" />
      </div>
    );
  }
export default Hero;
  