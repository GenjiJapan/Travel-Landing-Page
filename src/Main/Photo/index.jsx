import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { avtArr, photoArr } from "../../constants/images";
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

function ExpandedCVCard({ id, content, children, onCollapse }) {
  const handleSetName = () => {
    if (id === 1) return "Hùng CV";
    if (id === 2) return "Tuấn CV";
    if (id === 3) return "Nghị CV";
  };
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
        <motion.a target="_blank" href={content}>
          <FontAwesomeIcon icon={faGithub} />
          {handleSetName()}
        </motion.a>
      </motion.p>
    </>
  );
}

function ExpandedFeatureCard({ id, content, children, onCollapse }) {
  // const handleSetName = () => {
  //   if (id === 1) return "Hùng CV";
  //   if (id === 2) return "Tuấn CV";
  //   if (id === 3) return "Nghị CV";
  // };
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
        {content}
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

function DateButton({ id, img, content, onCollapse, onExpand, disabled }) {
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
          <ExpandedCVCard
            onCollapse={collapseDate}
            img={img}
            content={content}
            id={id}
          >
            <Content img={img} disabled={disabled} content={content} />
          </ExpandedCVCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} img={img}>
            <Content img={img} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

function FeatureButton({ img, content, onCollapse, onExpand, disabled }) {
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
          <ExpandedFeatureCard
            onCollapse={collapseDate}
            img={img}
            content={content}
          >
            <Content img={img} disabled={disabled} content={content} />
          </ExpandedFeatureCard>
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
  const [uiList, setUiList] = useState([]);
  const [avtList, setAvtList] = useState([]);

  useEffect(() => {
    setUiList(photoArr);
    // console.log("🚀 ~ file: index.jsx ~ line 7 ~ Photos ~ imgList", imgList);
  }, [photoArr, uiList]);

  useEffect(() => {
    setAvtList(avtArr);
    // console.log("🚀 ~ file: index.jsx ~ line 7 ~ Photos ~ imgList", imgList);
  }, [avtArr, avtList]);
  return (
    <div className="photo_container">
      <h1>Our CV</h1>
      <div className="dates">
        {avtList.map((img) => (
          <DateButton
            key={img}
            img={img.img}
            content={img.link}
            id={img.id}
            disabled={expandedDay !== img && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(img)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>

      <h1>Photo Impression</h1>
      <div className="dates">
        {uiList.map((img) => (
          <FeatureButton
            key={img}
            img={img.img}
            content={img.content}
            disabled={expandedDay !== img && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(img)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </div>
  );
};
