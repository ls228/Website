import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImage from "../images/about.png";
import "./About.css";

const About = () => {
  const { scrollYProgress } = useScroll();

  // Image fade-out effect
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const backgroundFade = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

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

      {/* Text Section (Fades in when entering viewport) */}
      <motion.div 
        className="about-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1>About Us</h1>
        <p>
          We create immersive digital experiences that blend technology and art. 
          Our passion lies in pushing creative boundaries and redefining how we interact with media.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
