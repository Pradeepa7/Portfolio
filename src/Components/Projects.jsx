import React from "react";
// Importing icons for links and GitHub
import { LuLink2 } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
// Importing project images
import aiProImg from "../assets/ai-p.jpg";
import weatherProImg from "../assets/weather-pp.jpg";
// Importing scroll visibility animation
import TrackVisibility from "react-on-screen";
// Importing tech stack icons
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiCss3, SiAxios, SiMongodb, SiExpress } from "react-icons/si";

const Projects = () => {
  // Project data array with image, title, description, tech icons, and links
  const projects = [
    {
      image: aiProImg,
      title: "AI Assistant",
      description:
        "An AI-powered assistant with user authentication and dynamic PDF question answering.",
      techIcons: [
        { icon: FaReact, color: "#61DBFB" },
        { icon: FaNodeJs, color: "#3C873A" },
        { icon: SiExpress, color: "white" },
        { icon: SiMongodb, color: "#4DB33D" },
      ],
      liveLink: "https://novaguide.netlify.app/",
      githubLink: "https://github.com/Pradeepa7/Novaguide",
    },
    {
      image: weatherProImg,
      title: "Weather App",
      description:
        "A real-time weather app using React and Axios displays current weather based on user input.",
      techIcons: [
        { icon: FaReact, color: "#61DBFB" }, // React
        { icon: SiCss3, color: "#264de4" }, // CSS
        { icon: FaBootstrap, color: "#7952B3" }, // Bootstrap
        { icon: SiAxios, color: "#671DDF" }, // Axios (custom color)
      ],
      liveLink: "https://forecasta.netlify.app/",
      githubLink: "https://github.com/Pradeepa7/weather-app",
    },
  ];

  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div className="container" id="projects">
          {/* Section title and intro */}
          <p
            className={`text-secondary ${
              isVisible ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            MY WORK
          </p>
          <h1
            className={`fw-bold ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
            style={{ color: "aqua" }}
          >
            Projects.
          </h1>
          <p
            className={`${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Here are some real-world projects that showcase my full stack
            development skills. Each includes a live demo and code link,
            highlighting my ability to design, build, and deploy functional web
            applications.
          </p>

          {/* Projects list */}
          <div className="container py-4 mb-4">
            <div className="row">
              {projects.map((project, index) => (
                <div
                  className="col-12 col-md-6 mb-4 mx-auto"
                  key={index}
                  style={{ width: "100%", maxWidth: "330px" }}
                >
                  <div
                    className={`card project-card position-relative  ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    {/* GitHub icon top-right */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="position-absolute top-0 end-0 m-2"
                    >
                      <FaGithub
                        size={27}
                        className="github-icon"
                        style={{
                          color: "white",
                          backgroundColor: "black",
                          borderRadius: "50%",
                          padding: "4px",
                          border: "2px solid white",
                        }}
                      />
                    </a>

                    {/* Project image */}
                    <div className="card-img-wrapper">
                      <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                      />
                    </div>

                    {/* Project details */}
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-white">{project.title}</h5>
                      <p className="card-text">{project.description}</p>

                      {/* Tech icons */}
                      <div className="tech-icon-group">
                        {project.techIcons.map(({ icon: Icon, color }, idx) => (
                          <span
                            key={idx}
                            className="tech-icon-colored"
                          >
                            <Icon
                              color={color}
                              fill={color}
                              size={18}
                              style={{ color: color, fill: color }}
                            />
                          </span>
                        ))}
                      </div>

                      {/* Live link to project */}
                      <div className="project-links">
                        <a
                          href={project.liveLink}
                          className="text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LuLink2 size={19} className="rotated-icon" />
                          Visit Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default Projects;
