import React from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <div className="container">
        <footer className="border-top mt-5 pt-3 text-center">
          {/* Copyright text */}
          <p className="mb-0">
            &copy; 2025 <span style={{color:"aqua"}}> Pradeepa.</span> All rights reserved.
          </p>
        </footer>
      </div>

      {/* Scroll-to-top button */}
      <Link
        to="home" // Scrolls to the element with id="home"
        smooth={true} // Smooth scroll animation
        duration={500} // Scroll duration in milliseconds
        offset={-80} // Adjust scroll position offset
        className="scroll-to-top bg-dark" // Styling classes
      >
        <FaArrowUp size={16} style={{fill:"aqua"}} /> {/* Up arrow icon */}
      </Link>
    </>
  );
};

export default Footer;
