import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/shivamarvadiya@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _subject: "New portfolio contact message",
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            message: formState.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2800);
      setFormState({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong while sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Let’s Connect</p>
        <h1>Available for opportunities, collaboration, and discussion</h1>
      </section>

      <div
        className={`success-popup ${showSuccess ? "show" : ""}`}
        aria-live="polite"
      >
        <div className="success-popup-content">
          <i className="fa fa-check-circle" />
          <span>Message sent successfully</span>
        </div>
      </div>

      <section className="contact-layout">
        <div className="page-card contact-info">
          <h2>Contact Details</h2>
          <p>
            <i className="fa fa-phone" /> +91 98797 29757
          </p>
          <p>
            <i className="fa fa-envelope" /> shivamarvadiya@gmail.com
          </p>
          <p>
            <i className="fa fa-envelope" /> Shivam.pict21@sot.pdpu.ac.in
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/arvadiya-shivam-438341244"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              href="https://github.com/shivampatel183"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa fa-github" />
            </a>
            <a
              href="https://leetcode.com/u/shivamarvadiya/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <i className="fa fa-code" />
            </a>
          </div>
          <div className="resume-link">
            <a
              href="/Files/ShivamPatel-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-download" /> Download Resume
            </a>
          </div>
        </div>

        <div className="page-card">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <textarea
              name="message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />
            <button type="submit" disabled={isSubmitting}>
              <i
                className={`fa ${isSubmitting ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
              />{" "}
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
