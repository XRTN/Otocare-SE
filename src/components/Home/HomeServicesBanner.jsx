import React from "react";
import { Button } from "../../UniversalComponents/Button/Button";
import { Link } from "react-router-dom";
import "../Home/HomeServicesBanner.css";

function HomeServicesBanner() {
  return (
    <>
      <div className="hsb-container">
        <div className="hsb-wrapper">
          <div className="hsb-description-container">
            <h1>OUR SERVICES</h1>
            <p>
              We offer comprehensive automotive solutions to keep your ride
              running smoothly. From efficient oil changes to precision wheel
              services and reliable battery replacements, trust our expert
              technicians to keep you on the road with confidence.
            </p>
            <Button linkTo="/Services">EXPLORE OUR SERVICES</Button>
          </div>
          <div className="hsb-img-container">
            <img src="/hsb.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServicesBanner;
