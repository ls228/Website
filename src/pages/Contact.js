import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  // Text Animation
  const textAnimation = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.54 } },
  };

  return (
    <div className="contact-container">
      {/* Leere Seite */}
      
      {/* Leerer Bereich, um den Text später erscheinen zu lassen */}
      <div className="empty-space"></div>

      {/* Erster Textabschnitt, erscheint nach 100vh */}
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-200px 0px -100px 0px" }}  // Text wird sichtbar, wenn er fast im Viewport ist

        className="text-section"
      >
        <h1>CONTACT Us</h1>
        <p>Get in touch with us.</p>
      </motion.div>

      {/* Zweiter Textabschnitt */}
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{margin: "-200px 0px -100px 0px" }}

        className="text-section"
      >
        <p>2. text text text</p>
      </motion.div>

      {/* Dritter Textabschnitt */}
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-200px 0px -100px 0px" }}

        className="text-section"
      >
        <p>3. text text text</p>
      </motion.div>

      {/* Vierter Textabschnitt */}
      <motion.div
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-200px 0px -100px 0px" }}
        className="text-section"
      >
        <p>4. text text text</p>
      </motion.div>
    </div>
  );
};

export default Contact;
