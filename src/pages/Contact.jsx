import React from "react";
import "../components/css/contactPage.css";
import contactHeader from './images/contactHeader.png'; // Adjust path as needed
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="contactHeader" src={contactHeader} alt="logo" />
        <h1>CONTACT</h1>
      </div>
      <h2>Send Us A Message</h2>
    </div>
  );
}
export default ContactPage;