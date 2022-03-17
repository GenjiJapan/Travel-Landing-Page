import React from "react";
import "./Why.css";
import {
  faCar,
  faGolfBall,
  faHandsHelping,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhyUs = () => {
  return (
    <div className="why_container">
      <div className="why_title">
        <h1>WHY US?</h1>
        <h2>AND OUR SERVICES</h2>
      </div>
      <div className="why_content">
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faHandsHelping} />
          <h1>INDIVIDUAL APPROACH</h1>
          <p>
            It's importance for us to maximize your impression by an individual
            caring approach
          </p>
        </div>
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faGolfBall} />

          <h1>SCENIC ROUTES</h1>
          <p>
            We pave routes for you across the most picturesque places in
            Cappadocia
          </p>
        </div>
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faWarehouse} />
          <h1>HOUSING</h1>
          <p>
            You have a wonderfull chance to spend 4 days in the authentic Cave
            hotel with a spellbinding view
          </p>
        </div>
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faCar} />
          <h1>RENT A CAR</h1>
          <p>
            We can help you to rent a car you want so you could enjoy your time
            withou worries
          </p>
        </div>
      </div>
    </div>
  );
};
