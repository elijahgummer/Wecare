import React from "react";
import './css/About.css'; // Importing the CSS file
import { SecButton } from "./Buttons";

function About() {
    return(
        <div id="about">
            <div className="container">
                <div className="content">
                    <h1>The Clinic</h1>
                    <p>We Care Medical Clinic was founded in 1973 by a group of doctors who felt the need for a holistic clinic in the community, one that would serve a wide variety of medical needs. The clinic opened in a large Victorian style home and has grown, over time, to include more than 70 doctors and specialists.</p>
                    <SecButton>LEARN MORE</SecButton>
                </div>
            </div>
        </div>
    );
}

export default About;