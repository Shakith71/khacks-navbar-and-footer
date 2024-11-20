import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<nav className={`gradient-border sp ${isMenuOpen ? "open" : ""}`}>

    
        {/* Hamburger Menu for mobile */}
        <div className="ham" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Links */}
        <ul className={isMenuOpen?"open":""}>
          <li><a href="/about" className="hover:text-blue-300">ABOUT</a></li>
          <li><a href="#sponsors" className="hover:text-blue-300">SPONSORS</a></li>
          <li><a href="#prizes" className="hover:text-blue-300">PRIZES</a></li>
          <li><a href="#rules" className="hover:text-blue-300">RULES</a></li>
          <li><a href="#theme" className="hover:text-blue-300">THEME</a></li>
          <li><a href="#timeline" className="hover:text-blue-300">TIMELINE</a></li>
          <li><a href="#faqs" className="hover:text-blue-300">FAQs</a></li>
          <li><a href="#contact" className="hover:text-blue-300">CONTACT</a></li>
          <li>
            <a href="#join" className="join rounded">
              Join Us
            </a>
          </li>
        </ul>
    
    </nav>
  );
};

export default Navbar;
