import React from "react";
import './css/Services.css';
import obstetrics from './images/obstetrics.png'

function Services() {
    return(
        <div id="services">
            <div className="content">
                <h1>Our services</h1>
                <div className="images-container">
                    <div className="image-box">
                    <img src={obstetrics} alt="obstetrics" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;