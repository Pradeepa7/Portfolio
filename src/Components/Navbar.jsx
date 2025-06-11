import React from "react";
// Importing Link from react-scroll for smooth scrolling to page sections
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    // Bootstrap navbar with dark theme and sticky positioning
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"black"}}>
      <div className="container-fluid">
        {/* Brand name/logo */}
        <a className="navbar-brand fs-3 fw-bold" href="#" style={{color:"aqua"}}>
          Prathi<span className="text-light">.</span>
        </a>

        {/* Toggler for responsive navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navigation links aligned to the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            {/* Navigation link to About section */}
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} offset={-100} className="nav-link">
                About
              </Link>
            </li>

            {/* Navigation link to Projects/Work section */}
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} offset={-70} className="nav-link">
                Work
              </Link>
            </li>

            {/* Navigation link to Contact section */}
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} offset={-100} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
