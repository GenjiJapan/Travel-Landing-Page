import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./ImageSlider.css";

export const ImageSlider = () => {
  //   console.log(images);
  //   const images = imgArr;
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    // console.log(
    //   "🚀 ~ file: index.jsx ~ line 13 ~ useEffect ~ carousel.current.scollWidth - carousel.current.offsetWidth",
    //   carousel.current.scrollWidth,
    //   carousel.current.offsetWidth
    // );
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner_carousel"
      >
        {images.map((image) => {
          return (
            <motion.div key={image} className="item">
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
