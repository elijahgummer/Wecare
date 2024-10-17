import React from "react";
import "../components/css/aboutPage.css"; // Assuming the CSS file is in the components/css folder
import aboutHeader from "../components/images/aboutHeader.png"; // Adjust path as needed
import people from "../components/images/people.png"; // Adjust path as needed
function AboutPage() {
  return (
    <div id="aboutPageSection">
      <div className="hero-con">
        <img className="aboutHeader" src={aboutHeader} alt="logo" />
        <h1>ABOUT</h1>
      </div>
      <div className="info-con">
        <div className="image-container">
          <img className="people-image" src={people} alt="people-working" />
        </div>
        <h1>Our Clinic</h1>
        <p>
          We Care Medical Clinic is dedicated to optimizing the quality of
          healthcare through an integrative approach to health and wellness. We
          include both conventional and complementary treatments for general
          health, healing and well being. Our goal is to model and advance a
          standard of integrative health care. We achieve this goal through our
          four core values: integration, compassion, expertise and time. Each
          and every professional that provides services at our clinic - from
          nurses and doctors to technicians and administrative staff, are
          dedicated to your good health and wellness. We do our best at the
          clinic so you live a full and healthy life, and spend as little time
          as possible at the clinic.
        </p>
        <h1>Hero for You</h1>
        <p>We are here to give you the best possible services, so you leave healthier than you arrived, and with more options for good health. We work collaboratively and cooperatively to ensure you get the very best services, whatever your needs.  </p>
      </div>
    </div>
  );
}
export default AboutPage;
