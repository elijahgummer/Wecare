import React from "react";
import "../components/css/contactPage.css";
import contactHeader from '../components/images/contactHeader.png'; // Adjust path as needed

function ContactPage() {
  return (
    <div id="contactPage">
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
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
