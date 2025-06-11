import React from "react";
// Importing visibility tracker for triggering animations on scroll
import TrackVisibility from "react-on-screen";

const About = () => {
  // Data for the cards representing different roles
  const cardData = [
    { icon: "bi bi-code-slash", title: "Frontend Developer" },
    { icon: "bi bi-brush", title: "Web Designer" },
    { icon: "bi bi-server", title: "Backend Developer" },
  ];

  return (
    // Main container with "about" id for section linking
    <div className="container" id="about">
      
      {/* INTRODUCTION heading with fade-in animation */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <p
            className={`text-secondary mb-2 ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            INTRODUCTION
          </p>
        )}
      </TrackVisibility>

      {/* Overview main heading with fade-in animation */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <h1
            className={`fw-bold mb-3 ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
            style={{ color: "aqua" }}
          >
            Overview.
          </h1>
        )}
      </TrackVisibility>

      {/* Description paragraph with fade-in animation */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <p
            className={`text-light ${
              isVisible ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            Passionate MERN Stack Developer skilled in building responsive web apps with MongoDB, Express.js, React, and Node.js. Focused on clean code, real-world solutions, and continuous learning through hands-on projects.
          </p>
        )}
      </TrackVisibility>

      {/* Role Cards Section with animation */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div className="container py-2 text-white mb-5">
            <div className="row">
              {cardData.map((item, index) => (
                // Individual card for each role
                <div className="col-md-4 mb-3 mb-md-0" key={index}>
                  <div
                    className={`card bg-dark text-white h-100 shadow-sm p-3 about-hover border-2 ${
                      isVisible ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{minHeight:"330px"}}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      {/* Role icon */}
                      <i
                        className={`${item.icon} fs-1 border-0`}
                        style={{ color: "aqua"}}
                      ></i>
                      {/* Role title */}
                      <h5 className="card-title mt-4 fw-bold mb-4 text-center">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};

export default About;
