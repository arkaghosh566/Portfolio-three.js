import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all assets needed for Arka's skills
import {
  python,
  java,
  cpp, // Assuming you have a c++ icon asset
  javascript,
  sql,
  mongodb,
  postgresql,
  html,
  css,
  tensorflow,
  pytorch,
  keras, // Assuming you have a keras icon asset
  scikitlearn, // Assuming asset name is scikitlearn
  pandas,
  numpy,
  matplotlib,
  opencv, // Assuming you have an opencv icon asset
  git,
  docker,
  canva, // Assuming asset name is canva
  figma, // Assuming asset name is figma
  streamlit, // Assuming asset name is streamlit
  jupyter,
  vsc, // Assuming asset name is vsc
  kaggle,
  vercel,
} from "../assets";

// Updated and re-categorized skills for an ML Engineer profile
const programming = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C++", icon: cpp },
  { name: "JavaScript", icon: javascript },
  { name: "SQL", icon: sql },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
];

const itTools = [
  { name: "TensorFlow", icon: tensorflow },
  { name: "PyTorch", icon: pytorch },
  { name: "Scikit-learn", icon: scikitlearn },
  { name: "Keras", icon: keras },
  { name: "OpenCV", icon: opencv },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "Matplotlib", icon: matplotlib },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Streamlit", icon: streamlit },
  { name: "Jupyter", icon: jupyter },
  { name: "VS Code", icon: vsc },
  { name: "Kaggle", icon: kaggle },
  { name: "Vercel", icon: vercel },
];

const designTools = [
  { name: "Canva", icon: canva },
  { name: "Figma", icon: figma },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
    designTools: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
        designTools: calculateRows(window.innerWidth, designTools),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring",
      },
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 },
    },
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${
              rowIndex % 2 === 1 ? "staggered-row" : ""
            }`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ userSelect: "none" }}
                  draggable="false"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Technical Proficiencies
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
        {renderCategory("designTools", rows.designTools)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
