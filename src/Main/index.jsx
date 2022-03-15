import React from "react";
import { AboutUs } from "./AboutUs";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Reason } from "./Reason";

export const Index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Reason />
      <AboutUs />
    </div>
  );
};
