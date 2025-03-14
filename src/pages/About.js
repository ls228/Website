import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImage from "../images/about.png";
import "./About.css";

const About = () => {
  const { scrollYProgress } = useScroll();

  // Image fade-out effect
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const backgroundFade = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // ✅ State to track when text should appear
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.4 && !textVisible) {
        setTextVisible(true);
      }
    });
  }, [scrollYProgress, textVisible]);

  return (
    <div className="page-container">
      {/* Fullscreen Hero Image with Fade Effect */}
      <motion.div 
        className="hero-image" 
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          opacity: imageOpacity,
        }}
      ></motion.div>

      {/* Background Fade to Black */}
      <motion.div 
        className="background-fade" 
        style={{ opacity: backgroundFade }}
      ></motion.div>

      {/* Smooth Text Fade In Without Glitch */}
      {textVisible && (
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About Us</h1>
          <p>
            We create immersive digital experiences that blend technology and art. 
            Our passion lies in pushing creative boundaries and redefining how we interact with media.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default About;
