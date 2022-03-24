import React from "react";
import "./Why.css";
import {
  faCar,
  faGolfBall,
  faHandsHelping,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Assignments = () => {
  return (
    <div className="why_container">
      <div className="why_title">
        <h1>Assignments</h1>
      </div>
      <div className="why_content">
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faHandsHelping} />
          <h1>Phùng Quốc Hùng</h1>
          <p>
            It's importance for us to maximize your impression by an individual
            caring approach
          </p>
        </div>
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faGolfBall} />

          <h1>Phạm Anh Tuấn</h1>
          <p>
            We pave routes for you across the most picturesque places in
            Cappadocia
          </p>
        </div>
        <div className="why_content_child">
          <FontAwesomeIcon size="3x" color="#f5e3cf" icon={faWarehouse} />
          <h1>Lê Đức Nghị</h1>
          <p>
            You have a wonderfull chance to spend 4 days in the authentic Cave
            hotel with a spellbinding view
          </p>
        </div>
      </div>
    </div>
  );
};
