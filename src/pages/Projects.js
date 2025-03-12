import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";
import project9 from "../images/project9.png";
import "./Projects.css";

const images = [project1, project2, project3, project4, project5, project6, project7, project8, project9];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="projects-container" ref={containerRef}>
      {/* Intro Text */}
      <motion.h1 className="intro-text" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}>
        Discover Our Projects
      </motion.h1>

      {/* Image Stacking Effect */}
      <div className="image-stack">
        {images.map((image, index) => {
          return (
            <motion.div
              key={index}
              className="project-image"
              initial={{ opacity: 0, translateZ: 800 }}
              whileInView={{
                opacity: 1,
                translateZ: [800 - index * 200, 0], // Move forward in depth separately
                scale: [1, 1.2],
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <img src={image} alt={`Project ${index + 1}`} />
            </motion.div>
          );
        })}
      </div>

      {/* Outro Text */}
      <motion.h1 className="outro-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        We Make Art With Light.
      </motion.h1>
    </div>
  );
};

export default Projects;
