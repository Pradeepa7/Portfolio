import React from "react";
// Importing visibility tracker for triggering animations on scroll
import TrackVisibility from "react-on-screen";

// Importing vertical timeline components and styles
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Importing company logo
import cLogo from "../assets/sw-tech-logo.jpeg";

const Experience = () => {
  // Timeline data for work experience
  const timelineData = [
    {
      title: "Full Stack Developer Intern",
      subtitle: "SmartWeb Technologies",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Developed responsive UI pages (Home, Login, Register, Pricing) using React, Bootstrap, HTML, CSS, and JavaScript.",
        "Used React Hooks for state management and navigation across pages.",
        "Created secure file upload with format validation (PDF, Word, Images).",
        "Integrated frontend and backend with Axios, Node.js, Express.js, JWT, bcrypt, and MongoDB for user authentication and data storage.",
      ],
      // Icon representing the company logo
      icon: (
        <img
          src={cLogo}
          alt="company logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ),
    },
  ];

  return (
    // Main container for the Experience section
    <div className="container">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <>
            {/* Section subtitle */}
            <p
              className={`text-secondary ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              WHAT I HAVE DONE SO FAR
            </p>

            {/* Section heading */}
            <h1
              className={`fw-bold ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
              style={{ color: "aqua" }}
            >
              Work Experience.
            </h1>

            {/* Vertical Timeline rendering each experience item */}
            <VerticalTimeline>
              {timelineData.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={item.date}
                  contentStyle={{
                    background: "#212529",
                    color: "white",
                    border: "solid 2px aqua",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid aqua" }}
                  iconStyle={{ background: "white" }}
                  icon={item.icon}
                  className={isVisible ? "animate__animated animate__fadeInUp" : ""}
                >
                  {/* Job title */}
                  <h3 className="vertical-timeline-element-title fs-5 fw-bold">
                    {item.title}
                  </h3>

                  {/* Company name */}
                  <h4 className="vertical-timeline-element-subtitle fs-6 text-secondary">
                    {item.subtitle}
                  </h4>

                  {/* Job responsibilities */}
                  <ul className="timeline-list mt-3">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </>
        )}
      </TrackVisibility>
    </div>
  );
};

export default Experience;
