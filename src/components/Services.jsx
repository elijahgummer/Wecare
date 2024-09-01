import React from "react";
import './css/Services.css';
import obstetrics from './images/obstetrics.png'
import pediatrics from './images/pediatrics.png'
import seniorcare from './images/seniorcare.png'

function Services() {
    return(
        <div id="services">
            <div className="content">
                <h1>Our services</h1>
                <div className="images-container">
                    <div className="image-box">
                    <img src={obstetrics} alt="obstetrics" />
                    </div>
                    <div className="image-box">
                    <img src={pediatrics} alt="pediatrics" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;