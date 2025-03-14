import { motion, useScroll, useTransform } from "framer-motion";
import aboutVideo from "../video/Home.mp4"; 
import "./Home.css";

import image1 from '../images/projects/1.png';
import image2 from '../images/projects/2.png';
import image3 from '../images/projects/3.png';
import image4 from '../images/projects/4.png';
import image5 from '../images/projects/5.png';
import image6 from '../images/projects/6.png';
import image7 from '../images/projects/7.png';


const Home = () => {
  const { scrollYProgress } = useScroll();

  // Video fade-out effect
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.01]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const backgroundFade = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const textAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", } },
  };


  return (
    <div className="page-container">
      {/* Fullscreen Video with Fade Effect */}
      <motion.div 
        className="hero-video-container"
        style={{ opacity: videoOpacity }}
      >
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Background Fade to Black */}
      <motion.div 
        className="background-fade" 
        style={{ opacity: backgroundFade }}
      ></motion.div>

      {/* Text at the bottom left of the video */}
      <motion.div 
        className="video-caption"
        style={{ opacity: captionOpacity }} 
      >
        <h1>we make art &nbsp; <br />
          with light.</h1>
          <p>
           immersive. interactive. bespoke.
          </p>
          
      </motion.div>
      <div className="transparent-space"></div>
            
        <motion.div 
          className="home-text"
          variants={textAnimation} 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-200px 0px -100px 0px" }}
          style={{ marginBottom: "100px" }}
        >
          <h1>ramus</h1>
          <p>
           is a global media architecture and lighting design studio based in Melbourne and Hong Kong.
          </p>
        </motion.div>

        <motion.div 
        className="home-img-container"
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-200px 0px -100px 0px" }}
      style={{ marginBottom: "100px", textAlign: "left" }} // Left-alignment des Bildes
    >
      <motion.img
        src={image1} 
        alt="My Image" 
        height={400} 
        style={{
          transition: "filter 0.3s ease-in-out", // Smooth Transition für den Hover-Effekt
          filter: "grayscale(100%)", // Initial schwarz-weiß
        }}
        whileHover={{
          filter: "grayscale(0%)", // Wechseln zu bunt beim Hover
        }}
      />
    </motion.div>

          <motion.div 
            className="home-text"
            variants={textAnimation} 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-200px 0px -100px 0px" }}
            style={{ marginBottom: "100px" }}
          >
            <h1>who we are</h1>
            <p>
            We are an artist-led design studio, founded and led by Light Artist Bruce Ramus. We are a multidisciplinary team from a wide range of experiences.
            </p>
          </motion.div>

          <motion.div 
          className="home-img-container"
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-200px 0px -100px 0px" }}
      style={{ marginBottom: "100px", textAlign: "left" }} // Left-alignment des Bildes
    >
      <motion.img
        src={image2} 
        alt="My Image" 
        height={400} 
        style={{
          transition: "filter 0.3s ease-in-out", // Smooth Transition für den Hover-Effekt
          filter: "grayscale(100%)", // Initial schwarz-weiß
        }}
        whileHover={{
          filter: "grayscale(0%)", // Wechseln zu bunt beim Hover
        }}
      />
    </motion.div>

            <motion.div 
              className="home-text"
              variants={textAnimation} 
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-200px 0px -100px 0px" }}
              style={{ marginBottom: "100px" }}
            >
              <h1>what we do</h1>
              <h2>we make art with light.</h2>
              <p>
              We are an artist-led design studio, founded and led by Light Artist Bruce Ramus. We are a multidisciplinary team from a wide range of experiences.
              </p>
            </motion.div>

            <motion.div 
            className="home-img-container"
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-200px 0px -100px 0px" }}
      style={{ marginBottom: "100px", textAlign: "left" }} // Left-alignment des Bildes
    >
      <motion.img
        src={image3} 
        alt="My Image" 
        height={400} 
        style={{
          transition: "filter 0.3s ease-in-out", // Smooth Transition für den Hover-Effekt
          filter: "grayscale(100%)", // Initial schwarz-weiß
        }}
        whileHover={{
          filter: "grayscale(0%)", // Wechseln zu bunt beim Hover
        }}
      />
    </motion.div>
            
            
    </div>
  );
};

export default Home;
