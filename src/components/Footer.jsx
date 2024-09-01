import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
      <footer>
        <div class="container">
          <div class="content">
            <div class="info-box">
              <i class="fa-solid fa-phone"></i>
              <h3>PHONE</h3>
              <p>1-234-567-890</p>
            </div>
            <div class="info-box">
              <i class="fa-solid fa-location-dot"></i>
              <h3>ADDRESS</h3>
              <p>We Care | Medical Clinic</p>
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
