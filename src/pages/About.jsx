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
          <svg
            viewBox="0 0 70 70"
            id="1541536717"
            duda_id="1541536717"
            class="svg u_1541536717"
            data-icon-name="wp-hospital_thin"
          >
            {" "}
            <g id="1246534557" duda_id="1246534557">
              {" "}
              <path
                d="M26,10v14H10v36h50V10H26z M12,26h14v4H12V26z M12,32h14v2H12V32z M12,58V36h14v22H12z M40,58v-8h6v8H40z M58,58H48V48H38
		v10H28V36h30V58z M58,34H28v-2h30V34z M58,30H28V12h30V30z"
                id="1615824811"
                duda_id="1615824811"
              ></path>
              <polygon
                points="42,26 44,26 44,22 48,22 48,20 44,20 44,16 42,16 42,20 38,20 38,22 42,22 	"
                id="1333278339"
                duda_id="1333278339"
              ></polygon>
            </g>
          </svg>
          <p>Cutting-Edge Facilities</p>
        </div>
        <div className="feature-box">
          <svg
            viewBox="0 0 70 70"
            id="1881194062"
            duda_id="1881194062"
            class="svg u_1881194062"
            data-icon-name="wp-heart_beat_thin"
          >
            {" "}
            <path
              d="M49.3,10.4c-1-0.2-2.1-0.4-3.1-0.4c-5.9,0-9.6,4.1-11.2,6.4c-1.6-2.2-5.3-6.4-11.1-6.4c-1,0-2.1,0.1-3.1,0.4
	C14.4,11.9,10,18.8,10,27.3c0,2.6,0.5,5.3,1.4,8l0.9,2.2c0.5,1.2,1.2,2.5,1.9,3.6c6.6,10.5,18.4,17.5,19.7,18.3l0.7,0.4
	C34.7,60,34.8,60,35,60c0.2,0,0.3,0,0.5-0.1l0.7-0.4c1.3-0.8,13.1-7.8,19.7-18.3c0.8-1.2,1.4-2.4,2-3.8l0.8-2.2
	c0.9-2.6,1.3-5.2,1.3-7.9C60,18.8,55.6,11.9,49.3,10.4z M35.2,57.7L35,57.8l-0.2-0.1c-1.3-0.7-12.6-7.5-19-17.7
	c-0.4-0.7-0.8-1.4-1.2-2.1H26c0.4,0,0.7-0.2,0.9-0.6l1-2.1l2.2,5c0.2,0.4,0.6,0.6,1,0.6c0.4,0,0.8-0.3,0.9-0.8l2.9-11.8L38,43.2
	c0.1,0.4,0.5,0.8,0.9,0.8c0,0,0,0,0.1,0c0.4,0,0.8-0.3,0.9-0.7l3.1-9.2l1.1,3.2c0.1,0.4,0.5,0.7,0.9,0.7h10.3
	c-0.4,0.7-0.7,1.4-1.2,2.1C47.8,50.2,36.4,57,35.2,57.7z M56.8,34.5L56.2,36H45.7l-1.8-5.3C43.8,30.3,43.4,30,43,30
	s-0.8,0.3-0.9,0.7l-2.8,8.5L36,23.8c-0.1-0.5-0.5-0.8-1-0.8c-0.4,0-0.9,0.3-1,0.8l-3.3,13.1l-1.8-4.3C28.8,32.2,28.4,32,28,32
	c-0.4,0-0.7,0.2-0.9,0.6L25.4,36H13.8l-0.5-1.4c-0.8-2.5-1.2-4.9-1.2-7.3c0-7.5,3.8-13.7,9.2-15c0.9-0.2,1.8-0.3,2.6-0.3
	c6.6,0,10.2,6.7,10.3,6.8c0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.7-0.2,0.9-0.5C36,18.4,39.5,12,46.2,12c0.9,0,1.7,0.1,2.6,0.3
	c5.4,1.3,9.2,7.4,9.2,15C58,29.7,57.6,32.1,56.8,34.5z"
              id="1917152452"
              duda_id="1917152452"
            ></path>
          </svg>
          <p>Individualized Personal Treatment</p>
        </div>
      </div>
      <div className="team">
        <h1>Our Staff</h1>
      </div>
    </div>
  );
}
export default AboutPage;
