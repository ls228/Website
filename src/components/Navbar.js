import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importiere Menu und X von Lucide
import { motion } from "framer-motion"; // Importiere Framer Motion für Animationen
import "./Navbar.css"; // Importiere die CSS-Datei für das Styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State zum Verfolgen des Menüzustands

  return (
    <nav className="navbar">
      {/* Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />} {/* Wenn geöffnet, X-Icon, sonst Hamburger-Icon */}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="menu-overlay"
        >
          <ul>
            <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/projects">Projects</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
            <li onClick={() => setMenuOpen(false)}><Link to="/3D">3D</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
