import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reason.css";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { ImageSlider } from "../ImageSlider";

export const Reason = () => {
  return (
    <div className="reason_container">
      <div className="reason_title">
        <h1>5 REASONS WHY YOU SHOULD VISIT CAPPADOCIA</h1>
      </div>
      <div className="reason_content">
        <div className="reason_detail">
          <div className="reason_detail_line"></div>
          <h1>Detail</h1>
          <ul>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>Techs : RESTful API, Laravel 8, MySQL, ReactJS, HTML/CSS</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>Roles: Customer, Organization and Admin</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>Main features: Search, Book tour, Review, Manage tour</p>
            </li>
            {/* <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>Round-trip tickets + transfer to the hotel</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>1100$ for two</p>
            </li> */}
          </ul>
          <button>BOOK A TOUR</button>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};
