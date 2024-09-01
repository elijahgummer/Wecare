import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="content">
          <div class="info-box">
            <i class="fa-regular fa-comments"></i>
            <h3>CONTACT</h3>
            <p>1-234-567-890</p>
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
            <h3>EMAIL</h3>
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
