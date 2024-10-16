import React from 'react';
import "../components/css/aboutPage.css"; // Assuming the CSS file is in the components/css folder
import aboutHeader from "../components/images/aboutHeader.png"; // Adjust path as needed

function AboutPage() {
  return (
    <div id="aboutPageSection">
      <div className="hero-con">
        <img className="aboutHeader" src={aboutHeader} alt="logo" />
        <h1>ABOUT</h1>
      </div>
    </div>
  );
}

export default AboutPage;
