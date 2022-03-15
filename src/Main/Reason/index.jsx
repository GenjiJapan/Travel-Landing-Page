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
          <h1>TRIP OF YOUR DREAM</h1>
          <ul>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>5 days and 4 nights in a hotel with a magical atmosphere</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>
                Hot air balloon flight at dawn + Photoshoot. Riding an ATV in
                the desert
              </p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>3 cities : Istanbul, Nevsehir, Goreme</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>Round-trip tickets + transfer to the hotel</p>
            </li>
            <li>
              <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              <p>1100$ for two</p>
            </li>
          </ul>
          <button>BOOK A TOUR</button>
        </div>
        {/* <div className="reason_img_slide">
        </div> */}
        <ImageSlider />
      </div>
    </div>
  );
};
