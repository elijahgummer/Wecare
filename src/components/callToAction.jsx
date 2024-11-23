import React from "react";
import Slider from "react-slick"; // Import the react-slick carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import "./css/CTA.css";
import pills from "./images/pills.png";
import pills2 from "./images/pills2.png";
import { PrimButton } from "./Buttons";
function CallToAction() {
  const sliderSettings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-play feature
    autoplaySpeed: 3000, // Delay between slides
  };
  return (
    <div id="cta">
      <div className="container">
        <div className="image-container">
          <Slider {...sliderSettings}>
            <div>
              <img src={pills} alt="Pills 1" />
            </div>
            <div>
              <img src={pills2} alt="Pills 2" />
            </div>
          </Slider>
        </div>
        <div className="content">
          <h1>Public Pharmacy</h1>
          <p>
            Managing your medications at We Care Medical Clinic is simple, from
            start to finish.
          </p>
          <PrimButton>LEARN MORE</PrimButton>
        </div>
      </div>
    </div>
  );
}
export default CallToAction;