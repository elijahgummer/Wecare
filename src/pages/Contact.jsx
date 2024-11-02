import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import "../components/css/contactPage.css";
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="contactHeader" src={servicesHeader} alt="logo" />
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}
export default ContactPage;