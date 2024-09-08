// AboutPage.js
import React from 'react';
import Footer from './components/Footer'; // Adjust the import path as needed

function AboutPage() {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We offer a variety of about to meet your needs.</p>
      </header>
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
      <Footer />
    </div>
  );
}

export default AboutPage;

