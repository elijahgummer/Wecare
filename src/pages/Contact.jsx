import React from "react";
import "../components/css/contactPage.css";
import contactHeader from '../components/images/contactHeader.png'; // Adjust path as needed
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="contactHeader" src={contactHeader} alt="logo" />
        <h1>CONTACT</h1>
      </div>
      <h2>Send <span>Us A Message</span></h2>
      <p>Have a question? We Care Medical Clinic is here to help. Send us a message and we’ll be in touch. </p>
    </div>
  );
}
export default ContactPage;