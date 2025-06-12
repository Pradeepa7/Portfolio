import React, { useRef, useState, useEffect } from "react";
// For animation when component comes into view
import TrackVisibility from "react-on-screen";
// Icons for email and phone
import { MdEmail, MdPhone } from "react-icons/md";
// Email sending service
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("black");

  // Clear the status message after 5 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  // Handle form submission and send email using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setStatusColor("green");
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Something went wrong. Please try again.");
          setStatusColor("red");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="container" id="contact">
      {/* Section title with animation */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <p
            className={`text-secondary ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            LET'S WORK TOGETHER
          </p>
        )}
      </TrackVisibility>

      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <h1
            className={`fw-bold ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
            style={{ color: "aqua" }}
          >
            Contact.
          </h1>
        )}
      </TrackVisibility>

      <div className="contact-column">
        <div className="row align-items-start">
          {/* Contact details section */}
          <div className="col-md-6">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <p>
                    I'm open to new opportunities and collaborations! Whether
                    you have a project idea or just want to connect, feel free
                    to reach out — let’s build something great together.
                  </p>
                  <p>
                    <MdEmail size={24} color="black" />{" "}
                    pradeepacsekar7@gmail.com
                  </p>
                  <p>
                    <MdPhone size={24} color="black" /> 9025663099
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>

          {/* Contact form section */}
          <div className="col-md-6">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form
                    className="contactForm"
                    id="contact-form"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    {/* Input: Name */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="user_name"
                        required
                      />
                    </div>
                    {/* Input: Email */}
                    <div className="mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="user_email"
                        required
                      />
                    </div>
                    {/* Input: Subject */}
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                    {/* Input: Message */}
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        name="message"
                        rows="7"
                        required
                      ></textarea>
                    </div>

                    {/* Status message */}
                    {statusMessage && (
                      <p
                        style={{ color: statusColor, fontWeight: "bold" }}
                      >
                        {statusMessage}
                      </p>
                    )}

                    {/* Submit button */}
                    <div className="d-grid gap-2 col-10 col-md-6 mx-auto mt-4 mb-5 btn-send-msg">
                      <button
                        className="btn"
                        type="submit"
                        style={{ backgroundColor: "aqua" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
