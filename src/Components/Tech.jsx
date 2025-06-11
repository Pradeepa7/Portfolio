import React from "react";
// Importing visibility tracker for scroll animations
import TrackVisibility from "react-on-screen";

// Importing icons for tech stack
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiGit,
  SiPostman,
  SiNetlify,
  SiRender
} from "react-icons/si";

// Array of tech stack items with corresponding icon and color
const techStack = [
  { icon: SiHtml5, color: "#e34c26" },
  { icon: SiCss3, color: "#264de4" },
  { icon: SiJavascript, color: "#f0db4f" },
  { icon: SiReact, color: "#61dafb" },
  { icon: SiExpress, color: "black" },
  { icon: SiNodedotjs, color: "#3c873a" },
  { icon: SiMongodb, color: "#4DB33D" },
  { icon: SiBootstrap, color: "#563d7c" },
  { icon: SiGit, color: "#f1502f" },
  { icon: SiPostman, color: "#ff6c37" },
  { icon: SiNetlify, color: "darkgreen" },
  { icon: SiRender, color: "black" }
];

const Tech = () => {
  return (
    // Container for the tech stack section with padding and margin
    <div className="container py-5 mb-4">
      {/* Responsive grid for displaying tech icons */}
      <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            // Each tech icon wrapped in a column and visibility tracker
            <div className="col d-flex justify-content-center" key={index}>
              <TrackVisibility>
                {({ isVisible }) => (
                  // Animated icon container with border and background
                  <div
                    className={`rounded-circle border-2 d-flex align-items-center justify-content-center ${
                      isVisible ? "animate__animated animate__flipInY animate__slow" : ""
                    }`}
                    style={{
                      width: "60px",
                      height: "60px",
                      border: "3px solid aqua",
                      backgroundColor: "white",
                    }}
                  >
                    {/* Rendering the tech icon with specific color */}
                    <Icon size={30} style={{ fill: tech.color }} />
                  </div>
                )}
              </TrackVisibility>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
