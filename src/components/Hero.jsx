import React from "react";
import './css/Hero.css'; // Importing the CSS file
import HeroPic from './images/hero.png'; // Adjust path as needed
function Hero() {
    return (
        <div class="logo-container">
        <img class="logo" src={HeroPic} alt="logo" />
      </div>
    );
  }
export default Hero;
  