import React from "react";
import { Images } from "../../constants/images";
import "./Data.css";

export const Data = () => {
  return (
    <div>
      <div className="data_container">
        <div className="data data_tours">
          <h1 className="data_number">215</h1>
          <p className="data_name">TOURS</p>
        </div>
        <div className="data data_years">
          <h1 className="data_number">7</h1>
          <p className="data_name">YEARS</p>
        </div>
        <div className="data data_members">
          <h1 className="data_number">1100</h1>
          <p className="data_name">MEMBERS</p>
        </div>
      </div>
      <div className="parallax">
        <button>BOOK A TOUR</button>
        <img src={Images.CAPPADOCIA2} alt="" />
      </div>
    </div>
  );
};
