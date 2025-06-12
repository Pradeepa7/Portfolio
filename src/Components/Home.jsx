import React from "react";
// Importing profile image
import profile from "../assets/pro-nobg.png";
// Importing visibility tracking for animation triggers
import TrackVisibility from "react-on-screen";
// Importing ScrollDown component
import ScrollDown from "./ScrollDown";
// Importing type animation package
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    // Main container with bottom margin and "home" id for navigation
    <div className="container mb-5" id="home">
      <div className="row justify-content-around align-items-center ">
        {/* Column 1: Text and social links */}
        <div className="col-md-6 order-2 order-md-1">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <>
                {/* Greeting */}
                <h4 className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  Hello, <span style={{ color: "aqua" }}>It's me</span>
                </h4>

                {/* Name */}
                <h1
                  className={isVisible ? "animate__animated animate__fadeInLeft" : ""}
                  style={{ color: "aqua" }}
                >
                  Pradeepa <span className="text-light">Chandrasekaran</span>
                </h1>

                {/* Animated role text using TypeAnimation */}
                <h4 className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <TypeAnimation
                    sequence={[
                      "MERN Full Stack Developer",
                      2000,
                      "Frontend Developer",
                      2000,
                      "Backend Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{ color: "aqua", display: "inline-block" }}
                  />
                </h4>

                {/* Short description */}
                <p className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  Passionate MERN Stack Developer who loves solving problems,
                  building user-friendly apps, and blending creativity with
                  code.
                </p>

                {/* Social media links */}
                <div
                  className={`d-flex justify-content-evenly mb-4 mb-md-5 ${
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }`}
                >
                  <a
                    href="https://github.com/Pradeepa7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/pradeepacsekar7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://x.com/Pradeepa_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a
                    href="https://instagram.com/pradeepa.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>

                {/* Download CV Button with animation and styling */}
                <div
                  className={`d-grid gap-2 col-10 col-md-6 mx-auto ${
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }`}
                >
                  <a
                    href="/Pradeepa.pdf"
                    download
                    className="btn rounded-pill btn-download-cv"
                    style={{ backgroundColor: "aqua", textAlign: "center" }}
                  >
                    Download CV
                  </a>
                </div>
              </>
            )}
          </TrackVisibility>
        </div>

        {/* Column 2: Profile image with animation */}
        <div className="col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0 mt-3 mt-md-0">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div
                className={`homeImgWrapper ${
                  isVisible ? "animate__animated animate__fadeInDown" : ""
                }`}
              >
                <img
                  src={profile}
                  alt="profile"
                  className="img-fluid homeImg"
                  style={{ maxWidth: "92%", height: "auto" }}
                />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>

      {/* Scroll down arrow indicator */}
      <ScrollDown />
    </div>
  );
};

export default Home;
