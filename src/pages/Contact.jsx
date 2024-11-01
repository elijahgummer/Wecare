import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import "../components/css/contactPage.css";
import { PrimButton } from "../components/Buttons";
function ContactPage() {
  return (
    <div id="contactPage">
      <div className="hero-con">
        <img className="servicesHeader" src={servicesHeader} alt="logo" />
        <h1>SERVICES</h1>
      </div>
    </div>
  );
}
export default ContactPage;