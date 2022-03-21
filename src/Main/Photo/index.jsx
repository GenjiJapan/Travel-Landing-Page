import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { photoArr } from "../../constants/images";
import "./Photos.css";

function Content({ img, disabled }) {
  return (
    <motion.h1
      className="title"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      <motion.img className="title_img" src={img} alt="" />
    </motion.h1>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
      <motion.p
        className="card expanded secondary"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
      >
        Today is clear
      </motion.p>
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
  );
}

function DateButton({ img, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-container">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} img={img}>
            <Content img={img} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} img={img}>
            <Content img={img} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export const Photos = () => {
  const [expandedDay, setCollapsedDay] = useState();
  const days = [25, 26, 27, 28, 29];
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    setImgList(photoArr);
    console.log("🚀 ~ file: index.jsx ~ line 7 ~ Photos ~ imgList", imgList);
  }, [photoArr, imgList]);
  return (
    <div className="photo_container">
      <h1>Photo Impression</h1>
      <div className="dates">
        {imgList.map((img) => (
          <DateButton
            key={img}
            img={img.img}
            disabled={expandedDay !== img && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(img)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { photoArr } from "../../constants/images";
// import "./Photos.css";

// export const Photos = () => {
//   const [imgList, setImgList] = useState([]);

//   useEffect(() => {
//     setImgList(photoArr);
//     console.log("🚀 ~ file: index.jsx ~ line 7 ~ Photos ~ imgList", imgList);
//   }, [photoArr, imgList]);

//   return (
//     <div className="photos_container">

//       <ul>
//         {imgList &&
//           imgList.map((item, key) => {
//             return (
//               <li key={key} className="column">
//                 <img src={item.img} alt="" />
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };
