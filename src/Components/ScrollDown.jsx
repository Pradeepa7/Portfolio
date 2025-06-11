import React from "react";
// Importing Link from react-scroll for smooth section navigation
import { Link } from "react-scroll";

const ScrollDown = () => {
  return (
    // Scroll down container with spacing
    <div className="scroll-down-container mt-5 mt-md-0">
      {/* Link to the "about" section with smooth scroll effect */}
      <Link to="about" smooth={true} duration={100} offset={-100}>
        {/* Mouse icon animation to indicate scroll */}
        <div className="mouse-icon">
          <div className="mouse-dot"></div>
        </div>
      </Link>
    </div>
  );
};

export default ScrollDown;
