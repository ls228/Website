import React from "react";
import "./Footer.css"; // Ensure the styles are correctly imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Links Section */}
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-youtube"></i> {/* YouTube Icon */}
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Ramus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
