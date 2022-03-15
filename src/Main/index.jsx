import React from "react";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { ImageSlider } from "./ImageSlider";
import { Reason } from "./Reason";

export const Index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Reason />
      {/* <ImageSlider /> */}
    </div>
  );
};
