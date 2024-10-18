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
        <div className="content">
          <h1>Our Clinic</h1>
          <p>
            We Care Medical Clinic is dedicated to optimizing the quality of
            healthcare through an integrative approach to health and wellness.
            We include both conventional and complementary treatments for
            general health, healing and well being.
          </p>
          <p>
            Our goal is to model and advance a standard of integrative health
            care. We achieve this goal through our four core values:
            integration, compassion, expertise and time. Each and every
            professional that provides services at our clinic - from nurses and
            doctors to technicians and administrative staff, are dedicated to
            your good health and wellness. We do our best at the clinic so you
            live a full and healthy life, and spend as little time as possible
            at the clinic.
          </p>
          <h1>Hero for You</h1>
          <p>
            We are here to give you the best possible services, so you leave
            healthier than you arrived, and with more options for good health.
            We work collaboratively and cooperatively to ensure you get the very
            best services, whatever your needs.{" "}
          </p>
        </div>
      </div>
      <div className="features">
        <div className="feature-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 70"
            id="1060746518"
            duda_id="1060746518"
            class="svg u_1060746518"
            data-icon-name="wp-ambulance_thin"
          >
            {" "}
            <g id="1816192322" duda_id="1816192322">
              {" "}
              <path
                d="M63.8,34.4L58.2,26c-1.7-2.5-4.5-4-7.5-4H48c0-2.8-2.2-5-5-5c-2.8,0-5,2.2-5,5H9c-1.7,0-3,1.3-3,3v26c0,1.7,1.3,3,3,3h2.1
		c0.5,2.8,2.9,5,5.9,5c3,0,5.4-2.2,5.9-5h24.2c0.5,2.8,2.9,5,5.9,5c3,0,5.4-2.2,5.9-5H61c1.7,0,3-1.3,3-3V35
		C64,34.8,63.9,34.6,63.8,34.4z M50.7,24c2.3,0,4.5,1.2,5.8,3.1l4.6,6.9H49c-0.6,0-1-0.4-1-1v-9H50.7z M43,19c1.7,0,3,1.3,3,3h-6
		C40,20.3,41.3,19,43,19z M17,57c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S19.2,57,17,57z M53,57c-2.2,0-4-1.8-4-4s1.8-4,4-4
		c2.2,0,4,1.8,4,4S55.2,57,53,57z M61,52h-2.1c-0.5-2.8-2.9-5-5.9-5c-3,0-5.4,2.2-5.9,5H22.9c-0.5-2.8-2.9-5-5.9-5
		c-3,0-5.4,2.2-5.9,5H9c-0.6,0-1-0.4-1-1V25c0-0.6,0.4-1,1-1h37v9c0,1.7,1.3,3,3,3h13v15C62,51.6,61.6,52,61,52z"
                id="1679028515"
                duda_id="1679028515"
              ></path>
              <path
                d="M31,28c-5,0-9,4-9,9s4,9,9,9c5,0,9-4,9-9S36,28,31,28z M31,44c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7S34.9,44,31,44z"
                id="1888105905"
                duda_id="1888105905"
              ></path>
              <polygon
                points="32,33 30,33 30,36 27,36 27,38 30,38 30,41 32,41 32,38 35,38 35,36 32,36 	"
                id="1092588446"
                duda_id="1092588446"
              ></polygon>
              <path
                d="M34,20h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1S33.4,20,34,20z"
                id="1742493332"
                duda_id="1742493332"
              ></path>
              <path
                d="M49,19c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2C49.4,18,49,18.4,49,19z"
                id="1239632658"
                duda_id="1239632658"
              ></path>
              <path
                d="M43,15c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v2C42,14.6,42.4,15,43,15z"
                id="1060274741"
                duda_id="1060274741"
              ></path>
              <path
                d="M37.3,15.7c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-1-1c-0.4-0.4-1-0.4-1.4,0
		c-0.4,0.4-0.4,1,0,1.4L37.3,15.7z"
                id="1144760549"
                duda_id="1144760549"
              ></path>
              <path
                d="M48,16c0.3,0,0.5-0.1,0.7-0.3l1-1c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-1,1c-0.4,0.4-0.4,1,0,1.4
		C47.5,15.9,47.7,16,48,16z"
                id="1712920529"
                duda_id="1712920529"
              ></path>
            </g>
          </svg>
          <p>Fast Emergency Response Time</p>
        </div>
        <div className="feature-box">
          <svg
            viewBox="0 0 70 70"
            id="1259609140"
            duda_id="1259609140"
            class="svg u_1259609140"
            data-icon-name="wp-doctor_thin"
          >
            {" "}
            <g id="1885095335" duda_id="1885095335">
              {" "}
              <path
                d="M58.5,48.3c-0.4-2.5-2-4.6-4.3-5.5l-11.3-4.5L42,35.8v-1.7l1.5-4.2c0.5-0.1,1.3-0.3,1.9-0.8c1.1-0.9,1.7-2.3,1.7-3.8
		c0-1.2-0.5-2-0.9-2.4c-0.4-0.3-0.8-0.6-1.1-0.7v-3.8c0-3.4-1.6-5.8-4.1-6.1c-1.3-2-4-2.3-5.9-2.3c-5.9,0-10,3.3-10,8v4.2
		c-0.4,0.1-0.8,0.3-1.1,0.7C23.5,23.3,23,24,23,25.3c0,1.6,0.6,2.9,1.7,3.8c0.6,0.5,1.3,0.7,1.9,0.8l1.5,4.2v1.7l-0.8,2.4l-11.3,4.5
		c-2.3,0.9-4,3-4.3,5.5L10,60h50L58.5,48.3z M28,28l-0.7,0c-0.2,0-0.9-0.1-1.3-0.4c-0.6-0.5-1-1.4-1-2.3c0-1,0.5-1.2,1-1.3l1,0v-6
		c0-3.5,3.3-6,8-6c3.2,0,4,1,4.4,1.7l0.3,0.6h0.6c2,0,2.7,2.1,2.7,4.1V24l1,0c0,0,0.4,0,0.7,0.3c0.2,0.2,0.3,0.5,0.3,1
		c0,1-0.3,1.8-1,2.3C43.6,27.9,43,28,42.8,28H42l-2,5.8v1.7l-5,3.8l-5-3.8v-1.7L28,28z M41,39L40,43l-3.3-2.5l3.8-2.9L41,39z
		 M36.6,43L35,44.6L33.4,43l1.6-1.2L36.6,43z M33.4,40.5L30,43.1l-1-4l0.5-1.4L33.4,40.5z M12.3,58l1.2-9.4c0.3-1.8,1.4-3.3,3.1-3.9
		l10.7-4.3L31.7,58H12.3z M30.6,45.2l1.2-0.9l1.8,1.8l-0.1,0.1l0,0c-0.6,0.7-1.3,1.9-1.8,3.7L30.6,45.2z M36.2,58h-2.4L33,54.9
		c0-4.1,1.2-6.4,2-7.4c0.8,1,2,3.3,2,7.4L36.2,58z M36.5,46.1L36.5,46.1L36.4,46l1.8-1.8l1.2,0.9l-1.2,4.7
		C37.8,48,37,46.8,36.5,46.1z M38.3,58l4.4-17.6l10.7,4.3c1.7,0.7,2.8,2.2,3.1,3.9l1.2,9.4H38.3z"
                id="1796448029"
                duda_id="1796448029"
              ></path>
              <polygon
                points="50,47 48,47 48,50 45,50 45,52 48,52 48,55 50,55 50,52 53,52 53,50 50,50 	"
                id="1270333234"
                duda_id="1270333234"
              ></polygon>
            </g>
          </svg>
          <p>Proffesional Staff & Specialists</p>
        </div>
        <div className="feature-box">
          <p>Cutting-Edge Facilities</p>
        </div>
        <div className="feature-box">
          <p>Individualized Personal Treatment</p>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
