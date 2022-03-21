import { TextField } from "@mui/material";
import React from "react";
import "./Footer.css";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content_head">
        <div className="footer_feedback">
          <h3 className="content">
            Please leave your feedback to our project for better services
          </h3>
          <TextField
            InputLabelProps={{ className: "content__label" }}
            className="content"
            id="standard-basic"
            label="Your name"
            variant="standard"
          />
          <TextField
            InputLabelProps={{ className: "content__label" }}
            className="content"
            id="standard-basic"
            label="Your feedback"
            variant="standard"
          />
          <button className="content">SEND</button>
        </div>
        <div className="footer_additionalServices">
          <div className="additionalServices_content">
            <ul>
              <li>
                <p>Additional services: </p>
                <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              </li>
              <li>
                <p>To book a sunrise picnic overlooking the vailey</p>
                <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              </li>
              <li>
                <p>
                  <FontAwesomeIcon className="circle_icon" icon={faCircle} />
                  Hot air balloon flight at dawn + Photoshoot for two
                </p>
              </li>
              <li>
                <p>Excursion to the Goreme National Park</p>
                <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              </li>
              <li>
                <p>
                  To book a suit for two in a luxurious authentic Cave Hotel
                </p>
                <FontAwesomeIcon className="circle_icon" icon={faCircle} />
              </li>
            </ul>
            <div className="reason_detail_line"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
