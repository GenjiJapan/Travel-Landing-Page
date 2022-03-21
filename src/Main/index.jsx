import React from "react";
import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { Data } from "./Data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Photos } from "./Photo";
import { Reason } from "./Reason";
import { WhyUs } from "./WhyChoose";

export const Index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Reason />
      <AboutUs />
      <Data />
      <WhyUs />
      <Photos />
      <Footer />
    </div>
  );
};
