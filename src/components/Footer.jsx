import React from "react";
import "./css/Footer.css";
import { SecButton } from "./Buttons";

function Footer() {
  return (
    <footer>
        <SecButton>MAKE AN APPOINTMENT</SecButton>
      <div class="container">
        <div class="content"> 
          <div class="info-box">
            <i class="fa-regular fa-comments"></i>
            <h3>CONTACT</h3>
            <p>+555-555-1234</p>
            <p>example@email.com</p>
          </div>
          <div class="info-box">
            <i class="fa-solid fa-location-dot"></i>
            <h3>ADDRESS</h3>
            <p>We Care | Medical Clinic</p>
            <div class="logo-container">
              <div class="social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-google-plus-g"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div class="info-box">
            <i class="fa-regular fa-envelope"></i>
            <h3>CLINIC HOURS</h3>
            <p>Mon-Fri    8:00AM-9:00PM</p>
            <p>Sat    8:00AM-6:00PM</p>
            <p>Sun    CLOSED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
