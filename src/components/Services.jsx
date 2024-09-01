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

            <div className="content-box">
              <h2>OBSTETRICS</h2>
              <p>
                Access a complete line of medical services to maintain your
                health throughout pregnancy, including evaluation, diagnosis and
                treatment.
              </p>
            </div>
          </div>
          <div className="image-box">
            <img src={pediatrics} alt="pediatrics" />
            <div className="content-box">
              <h2>PEDIATRICS</h2>
              <p>
                With four in-house pediatric doctors, each one a specialist in
                the field, we ensure that every child at the clinic gets the
                care they require.
              </p>
            </div>
          </div>
          <div className="image-box">
            <img src={seniorcare} alt="seniorcare" />
            <div className="content-box">
              <h2>SENIOR CARE</h2>
              <p>
                We offer comprehensive primary care and consultations to support
                patients and families cope with the challenging conditions
                related to aging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
