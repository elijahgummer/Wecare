import React from "react";
import "../components/css/contactPage.css";
import contactHeader from '../components/images/contactHeader.png'; // Adjust path as needed
import { PrimButton } from "../components/Buttons";
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="contactHeader" src={contactHeader} alt="logo" />
        <h1>CONTACT</h1>
      </div>
      <h2>Send<span> Us a Message</span></h2>
      <p>Have a question? We Care Medical Clinic is here to help. Send us a message and we’ll be in touch.</p>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="contact-form-row">
            <div className="half-width">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="half-width">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" required />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <PrimButton>Send Message</PrimButton>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
