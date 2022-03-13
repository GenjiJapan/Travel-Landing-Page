import React from "react";
import { Images } from "../../constants/images";
import { Header } from "../Header";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_img">
        <img src={Images.CAPPADOCIA} alt="" />
      </div>
      <div className="banner_overlay_left"></div>
    </div>
  );
};
