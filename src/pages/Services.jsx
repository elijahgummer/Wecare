// ServicesPage.js
import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import './servicesPage.css';
function ServicesPage() {
  return (
    <div id="servicePage">
      <div className="hero-con">
        <img className="servicesHeader" src={servicesHeader} alt="logo" />
      </div>
    </div>
  );
}
export default ServicesPage;
