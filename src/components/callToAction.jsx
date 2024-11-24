import React from "react";
import Slider from "react-slick"; // Import the react-slick carousel
import "slick-carousel/slick/slick.css"; // Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import "./css/CTA.css";
import pills1 from "./images/pills.png";
import pills2 from "./images/pills2.png";
import { PrimButton } from "./Buttons";
// Custom Arrow Components
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &#x276E;
    </div>
  );
}
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &#x276F;
    </div>
  );
}
function CallToAction() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
  };
  return (
    <div id="cta">
      <div className="container">
        <div className="image-container">
          <Slider {...sliderSettings}>
            <div>
              <img src={pills1} alt="Pills 1" />
            </div>
            <div>
              <img src={pills2} alt="Pills 2" />
            </div>
            <div>
              <img src={pills3} alt="Pills 3" />
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