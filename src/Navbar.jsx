import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navContainer ${isMenuOpen ? "yes" : ""}`}>
      <div className={`ham ${isMenuOpen ? "burger" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <nav className="gradient-border">
        <ul className="window">
          <li><a href="/about" className="hover:text-blue-300">ABOUT</a></li>
          <li><a href="#sponsors" className="hover:text-blue-300">SPONSORS</a></li>
          <li><a href="#prizes" className="hover:text-blue-300">PRIZES</a></li>
          <li><a href="#rules" className="hover:text-blue-300">RULES</a></li>
          <li><a href="#theme" className="hover:text-blue-300">THEME</a></li>
          <li><a href="#timeline" className="hover:text-blue-300">TIMELINE</a></li>
          <li><a href="#faqs" className="hover:text-blue-300">FAQs</a></li>
          <li><a href="#contact" className="hover:text-blue-300">CONTACT</a></li>
          <li>
            <button className="join rounded">
              Join Us
            </button>
          </li>
        </ul>
      </nav>

      {isMenuOpen && <nav className={isMenuOpen ? "open" : "close"}>
      <IoMdClose onClick={toggleMenu} className="cross" />
        <ul className="uList flex flex-col  p-10   w-40">
          <li><a href="/about" className="hover:text-blue-300">ABOUT</a></li>
          <li><a href="#sponsors" className=" hover:text-blue-300">SPONSORS</a></li>
          <li><a href="#prizes" className="hover:text-blue-300">PRIZES</a></li>
          <li><a href="#rules" className="hover:text-blue-300">RULES</a></li>
          <li><a href="#theme" className="hover:text-blue-300">THEME</a></li>
          <li><a href="#timeline" className="hover:text-blue-300">TIMELINE</a></li>
          <li><a href="#faqs" className="hover:text-blue-300">FAQs</a></li>
          <li><a href="#contact" className="hover:text-blue-300">CONTACT</a></li>
          <li>
            <button className=" rounded bg-blue-500 p-1">
              Join Us
            </button>
          </li>
        </ul>
      </nav>
      }


    </div>
  );
};

export default Navbar;
