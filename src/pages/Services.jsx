// ServicesPage.js
import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import '../components/css/servicesPage.css';
function ServicesPage() {
  return (
    <div id="servicePage">
      <div className="hero-con">
        <img className="servicesHeader" src={servicesHeader} alt="logo" />
      </div>
      <p>We offer a wide range of services, from maternal care to senior care, from pediatrics to dentistry. Our mission is to help you maintain a high quality of life through best health practices, and our entire staff is dedicated to this goal. We offer holistic solutions to meet all of your health needs. </p>
    </div>
  );
}
export default ServicesPage;
