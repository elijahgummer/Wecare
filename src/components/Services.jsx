import React from "react";
import './css/Services.css';
import obstetrics from './imgages/obstetrics.png'

function Services() {
    return(
        <div id="services">
            <div className="content">
                <h1>Our services</h1>
                <div className="images-container">
                    <img src={obstetrics} alt="obstetrics" />
                </div>
            </div>
        </div>
    );
}
export default Services;