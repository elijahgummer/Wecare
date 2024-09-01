import React from "react";
import "./css/Services.css";
import obstetrics from "./images/obstetrics.png";
import pediatrics from "./images/pediatrics.png";
import seniorcare from "./images/seniorcare.png";

function Services() {
  return (
    <div id="services">
      <div className="content">
        <h1>Our services</h1>
        <div className="images-container">
          <div className="image-box">
            <img src={obstetrics} alt="obstetrics" />
          </div>
          <div className="content-box">
            <h1>OBSTETRICS</h1>
            <p>Access a complete line of medical services to maintain your health throughout pregnancy, including evaluation, diagnosis and treatment.</p>
          </div>
          <div className="image-box">
            <img src={pediatrics} alt="pediatrics" />
            <div className="content-box">
              <h1>PEDIATRICS</h1>
              <p></p>
            </div>
          </div>
          <div className="image-box">
            <img src={seniorcare} alt="seniorcare" />
          </div>
          <div className="content-box">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
