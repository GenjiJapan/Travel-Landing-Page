import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./About.css";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export const AboutUs = () => {
  return (
    <div className="about_container">
      <h1>ABOUT US</h1>
      <div className="about_content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam,
          ducimus, saepe sed esse illo voluptatum amet aut minima aspernatur
          inventore dolorem, libero aliquam nobis similique perferendis
          temporibus! Asperiores, iste?
        </p>
        <button>
          READ MORE
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      <div className="about_line"></div>
    </div>
  );
};
