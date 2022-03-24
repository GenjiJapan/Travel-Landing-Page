import React from "react";
import { Images } from "../../constants/images";
import "./Why.css";

export const Assignments = () => {
  return (
    <div className="why_container">
      <div className="why_title">
        <h1>Assignments</h1>
      </div>
      <div className="why_content">
        <div className="why_content_child">
          <img src={Images.BACKEND} alt="" />
          <h1>Phùng Quốc Hùng</h1>
          <p>Design Database, Core, Backend, UI, analysis requirement.</p>
        </div>
        <div className="why_content_child">
          <img src={Images.FRONTENDDESIGN} alt="" />

          <h1>Phạm Anh Tuấn</h1>
          <p>Design and implement UI, analysis requirement.</p>
        </div>
        <div className="why_content_child">
          <img src={Images.FRONTENDLOGIC} alt="" />
          <h1>Lê Đức Nghị</h1>
          <p>
            Handle logic, functionals, requests and response from API, analysis
            requirement.
          </p>
        </div>
      </div>
    </div>
  );
};
