import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import "../components/css/contactPage.css";
import contactHeader from './images/contactHeader.png'; // Adjust path as needed
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="contactHeader" src={contactHeader} alt="logo" />
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}
export default ContactPage;