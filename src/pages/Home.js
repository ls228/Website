import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutVideo from "../video/Home.mp4"; 
import "./Home.css";

const Home = () => {
  const { scrollYProgress } = useScroll();

  // Video fade-out effect
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const backgroundFade = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Text fade-out effect before reaching the top
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // Ensure Text Appears Smoothly
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
      {/* 🔹 Fixed Logo (Always Visible) */}
      <div className="logo">
        <h2>RAMUS.</h2>
      </div>

      {/* ✅ Fullscreen Video with Fade Effect */}
      <motion.div 
        className="hero-video-container"
        style={{ opacity: videoOpacity }}
      >
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* 🔹 Background Fade to Black */}
      <motion.div 
        className="background-fade" 
        style={{ opacity: backgroundFade }}
      ></motion.div>

      {/* 🔹 Text at the bottom left of the video */}
      <motion.div 
        className="video-caption"
        style={{ opacity: textOpacity }} 
      >
        <h1>we make art &nbsp; <br />
          with light.</h1>
          <p>
           immersive. interactive. bespoke.
          </p>
      </motion.div>

      {textVisible && (
        <motion.div 
          className="about-text"
          style={{ opacity: textOpacity }} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>ramus</h1>
          <p>
           is a global media architecture and lighting design studio based in Melbourne and Hong Kong.
          </p>

          <h1>who we are</h1>
          <p>
          We are an artist-led design studio, founded and led by Light Artist Bruce Ramus. We are a multidisciplinary team from a wide range of experiences.
          </p>

          <h1>what we do</h1>
          <h2>we make art with light.</h2>
          <p>
          We create large-scale luminous and digital artworks for architectural facades, city precincts, commercial spaces. We combine light, sculpture, digital media and interactive technology to create works for architectural projects and public spaces.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
