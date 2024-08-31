import React from "react";
import "./css/Hero.css"; // Importing the CSS file
import HeroPic from "./images/hero.png"; // Adjust path as needed
function Hero() {
  return (
    <div class="container">
        <h1>We Care About You</h1>
      <img class="logo" src={HeroPic} alt="logo" />
    </div>
  );
}
export default Hero;
