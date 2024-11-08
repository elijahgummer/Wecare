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
      <h2>Send<span> Us a Message</span></h2>
      <p>Have a question? We Care Medical Clinic is here to help. Send us a message and we’ll be in touch.</p>
      
      <div className="contact-form"> {/* Use className instead of class */}
        <form action="#">
          <label htmlFor="name">Name</label> {/* Use htmlFor instead of for in JSX */}
          <input type="text" id="name" name="name" required />

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
