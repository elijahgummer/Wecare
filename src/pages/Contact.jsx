import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import "../components/css/servicesPage.css";
import obstetrics from "../components/images/obstetrics.png";
import pediatrics from "../components/images/pediatrics.png";
import seniorcare from "../components/images/seniorcare.png";
import pills from '../components/images/pills.png'
import { PrimButton } from "../components/Buttons";
function ServicesPage() {
  return (
    <div id="servicePage">
      <div className="hero-con">
        <img className="servicesHeader" src={servicesHeader} alt="logo" />
        <h1>SERVICES</h1>
      </div>
      <p>
        We offer a wide range of services, from maternal care to senior care,
        from pediatrics to dentistry. Our mission is to help you maintain a high
        quality of life through best health practices, and our entire staff is
        dedicated to this goal. We offer holistic solutions to meet all of your
        health needs.
      </p>

      {/* Pediatrics Card */}
      <div className="card-container">
        <img src={pediatrics} alt="pediatrics" />
        <div className="content">
          <h1>Pediatrics</h1>
          <p>
            From newborns until the age of 18, pediatric medicine covers
            everything from vaccinations and checkups to sleeping and feeding
            problems, obesity, learning issues, and mental health. We have four
            in-house pediatric doctors to ensure every child gets the care they deserve.
          </p>
        </div>
      </div>

      {/* Obstetrics Card */}
      <div className="card-container ob">
        <img src={obstetrics} alt="obstetrics" />
        <div className="content">
          <h1>Obstetrics</h1>
          <p>
            We provide a complete line of medical services to ensure a safe and
            sound pregnancy. Our in-house midwives and obstetricians offer personalized care before, during, and after pregnancy, with evaluations, diagnosis, and treatment.
          </p>
        </div>
      </div>

      {/* Senior Care Card */}
      <div className="card-container">
        <img src={seniorcare} alt="senior care" />
        <div className="content">
          <h1>Senior Care</h1>
          <p>
            Our team of geriatric specialists supports your health needs as you age. We offer primary care and consultations for adults 65+ with conditions like dementia, ensuring you receive compassionate, comprehensive care.
          </p>
        </div>
      </div>
      <div id="cta">
            <div className="container">
                <div className="image-container">
                    <img src={pills} alt="pills" />
                </div>
                <div className="content">
                    <h1>Public Pharmacy</h1>
                    <p>Managing your medications at We Care Medical Clinic is simple, from start to finish.                     </p>
                    <PrimButton>LEARN MORE</PrimButton>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ServicesPage;