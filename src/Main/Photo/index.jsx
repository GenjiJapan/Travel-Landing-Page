import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import "./Photos.css";

function Content({ day, disabled }) {
  return (
    <motion.h1
      className="title"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {day}
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

function DateButton({ day, onCollapse, onExpand, disabled }) {
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
          <ExpandedCard onCollapse={collapseDate} day={day}>
            <Content day={day} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <Content day={day} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export const Photos = () => {
  const [expandedDay, setCollapsedDay] = useState();
  const days = [25, 26, 27, 28, 29];

  return (
    <div className="container">
      <p>Click on a date to see the expanded view.</p>
      <div className="dates">
        {days.map((day) => (
          <DateButton
            key={day}
            day={day}
            disabled={expandedDay !== day && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(day)}
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
