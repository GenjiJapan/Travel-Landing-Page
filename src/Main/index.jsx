import React from "react";
import "./Index.css";
import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { Data } from "./Data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Photos } from "./Photo";
import { Reason } from "./Reason";
import { WhyUs } from "./WhyChoose";
import SmoothScroll from "./SmoothScroll";

export const Index = () => {
  return (
    <div>
      <SmoothScroll>
        <div className="index_line"></div>
        <Header />
        <Banner />
        <Reason />
        <AboutUs />
        <Data />
        <WhyUs />
        <Photos />
        <Footer />
      </SmoothScroll>
    </div>
  );
};
