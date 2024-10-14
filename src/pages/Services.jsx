// ServicesPage.js
import React from "react";
import servicesHeader from "../components/images/servicesPageHeader.png"; // Adjust path as needed
import "../components/css/servicesPage.css";
import obstetrics from "../components/images/obstetrics.png";
import pediatrics from "../components/images/pediatrics.png";
import seniorcare from "../components/images/seniorcare.png";
function ServicesPage() {
  return (
    <div id="servicePage">
      <div className="hero-con">
        <img className="servicesHeader" src={servicesHeader} alt="logo" />
      </div>
      <p>
        We offer a wide range of services, from maternal care to senior care,
        from pediatrics to dentistry. Our mission is to help you maintain a high
        quality of life through best health practices, and our entire staff is
        dedicated to this goal. We offer holistic solutions to meet all of your
        health needs.{" "}
      </p>
      <div className="card-container">
        <img src={pediatrics} alt="pediatrics" />
        <div className="content">
          <h1>Pediatrics</h1>
          <p>
            From newborns until the age of 18, pediatric medicine covers
            everything from vaccinations and checkups to sleeping and feeding
            problems, obesity, learning issues and mental health. We have four
            in-house pediatric doctors, each with his or her own specialty, to
            ensure that you get the pediatric care that every child deserves.{" "}
          </p>
        </div>
      </div>
      <div className="card-container">
        <img src={obstetrics} alt="obstetrics" />
        <div className="content">
          <h1>Obstetrics </h1>
          <p>
            We provide a complete line of medical services to ensure a safe and
            sound pregnancy. The services we offer cover personalized care
            before, during and after pregnancy. Our in-house midwives and
            obstetricians provide periodic comprehensive examinations and
            childbirth preparation classes. We also offer evaluation, diagnosis
            and treatment of a wide range of obstetric-related issues.
          </p>
        </div>
      </div>
      <div className="card-container">
        <img src={seniorcare} alt="seniorcare" />
        <div className="content">
          <h1>Senior Care</h1>
          <p>
            Our team of geriatric specialists helps you manage your changing
            health needs as you age. We offer comprehensive primary care and
            consultations to support patients and families coping with
            challenging conditions related to aging. Our services include
            primary care for adults 65 years and older who have neurological
            conditions such as dementia and cognitive impairment.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ServicesPage;
