import React from 'react';
import "../components/css/aboutPage.css"; // Assuming the CSS file is in the components/css folder
import aboutHeader from "../components/images/aboutHeader.png"; // Adjust path as needed

function AboutPage() {
  return (
    <div className="about-page">
      <div className="hero-con">
        <img className="servicesHeader" src={aboutHeader} alt="logo" />
        <h1>SERVICES</h1>
      </div>
      <section className="about-list">
        <div className="service-item">
          <h2>Service 1</h2>
          <p>Description of Service 1. This is a brief overview of what the service entails.</p>
        </div>
        <div className="service-item">
          <h2>Service 2</h2>
          <p>Description of Service 2. This is a brief overview of what the service entails.</p>
        </div>
        <div className="service-item">
          <h2>Service 3</h2>
          <p>Description of Service 3. This is a brief overview of what the service entails.</p>
        </div>
        {/* Add more service items as needed */}
      </section>
    </div>
  );
}

export default AboutPage;
