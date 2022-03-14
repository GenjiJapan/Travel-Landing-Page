import React from "react";
import { Images } from "../../constants/images";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Banner = () => {
  return (
    <div className="banner_container">
      <div className="header_line_beside"></div>
      <div className="banner_img">
        <img src={Images.CAPPADOCIA} alt="" />
      </div>
      <div className="banner_overlay_left"></div>
      <div className="banner_content">
        <div className="place_describe">
          <p>Between Heaven and Earth</p>
          <h1>CAPPADOCIA</h1>
          <button>BOOK A TOUR</button>
        </div>
      </div>
      <div className="banner_scrollDown">
        <FontAwesomeIcon icon={faArrowAltCircleDown} />
        <p>See mores</p>
        <div className="line"></div>
      </div>
      <div className="banner_slogan">
        <h1>FASTER</h1>
        <h1>CONVENIENT</h1>
        <h1>CHEAPER</h1>
      </div>
    </div>
  );
};
