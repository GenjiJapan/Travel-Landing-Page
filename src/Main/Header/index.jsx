import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Images } from "../../constants/images";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img src={Images.LOGO} alt="" />
      </div>
      <ul className="header_indicator">
        <li>DETAIL</li>
        <li>ASSIGNMENTS</li>
        <li>CV</li>
        <li>PAGES</li>
      </ul>
      <ul className="brand_indicator">
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </ul>
    </div>
  );
};
