import React from "react";
import { Assignments } from "./Assignments";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Index.css";
import { Photos } from "./Photo";
import { Reason } from "./Reason";

export const Index = () => {
  return (
    <div>
      <div className="index_line"></div>
      <Header />
      <Banner />
      <Reason />
      {/* <AboutUs /> */}
      {/* <Data /> */}
      <Assignments />
      <Photos />
      <Footer />
      {/* <SmoothScroll>
      </SmoothScroll> */}
    </div>
  );
};
