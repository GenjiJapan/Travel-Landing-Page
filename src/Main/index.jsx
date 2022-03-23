import React from "react";
import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { Data } from "./Data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Index.css";
import { Photos } from "./Photo";
import { Reason } from "./Reason";
import SmoothScroll from "./SmoothScroll";
import { WhyUs } from "./WhyChoose";

export const Index = () => {
  return (
    <div>
      <div className="index_line"></div>
      <Header />
      <Banner />
      <Reason />
      <AboutUs />
      <Data />
      <WhyUs />
      <Photos />
      <Footer />
      {/* <SmoothScroll>
      </SmoothScroll> */}
    </div>
  );
};
