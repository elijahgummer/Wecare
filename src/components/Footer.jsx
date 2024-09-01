import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div class="container">
          <div class="content">
            <div class="logo-container">
              <img src="images/logo.png" alt="logo" />
              <div class="social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-google-plus-g"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <button>CALL NOW</button>
            <div class="info-box">
              <i class="fa-solid fa-location-dot"></i>
              <h3>AREA OF SERVICE</h3>
              <p>City, State and Zip</p>
            </div>
            <div class="info-box">
              <i class="fa-solid fa-phone"></i>
              <h3>PHONE</h3>
              <p>1-234-567-890</p>
            </div>
            <div class="info-box">
              <i class="fa-regular fa-envelope"></i>
              <h3>EMAIL</h3>
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
