import React from "react";
import "./css/About.css"; // Importing the CSS file
import { ThirdButton } from "./Buttons";
import aboutImage from './images/aboutImage.png'; // Adjust path as needed


function About() {
  return (
    <div id="about">
        <div className="image-container">
          <img className="logo" src={aboutImage} alt="logo" />
        </div>
        <div className="content">
          <h1>The Clinic</h1>
          <p>
            We Care Medical Clinic was founded in 1973 by a group of doctors who
            felt the need for a holistic clinic in the community, one that would
            serve a wide variety of medical needs. The clinic opened in a large
            Victorian style home and has grown, over time, to include more than
            70 doctors and specialists.
          </p>
          <ThirdButton>LEARN MORE</ThirdButton>
        </div>
      </div>
  );
}

export default About;
