import photo from "../assets/photo.jpg";

export default function HomePage() {
  return (
    <>
      <section className="intro">
        <div className="left">
          <img src={photo} alt="Shivam Patel" />
        </div>
        <div className="right">
          <p className="eyebrow">Engineer • Builder • Learner</p>
          <h1>Shivam Patel</h1>
          <p className="intro-summary">
            Software engineer building thoughtful web applications, reliable
            backend systems, and practical tools for real-world problems.
          </p>
          <div className="home-actions">
            <a
              href="https://github.com/shivampatel183"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arvadiya-shivam-438341244"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="page-card">
        <h2>About Me</h2>
        <p>
          As a Software Engineer at Infoelegant Solution, I develop intuitive,
          scalable web applications that address real-world challenges and
          improve how people interact with technology. My work combines
          front-end development with React, JavaScript, and TypeScript,
          alongside backend development in Java.
        </p>
        <p>
          I also work with AWS, MySQL, Splunk, and Tableau to support reliable
          systems and data-informed decisions. I use AI-assisted tools to
          improve productivity, move development forward efficiently, and
          explore better approaches to evolving technical challenges.
        </p>
        <p>
          I take ownership from problem-solving through delivery, collaborate
          across teams, and focus on end-to-end solutions that create meaningful
          value for users and the business.
        </p>
      </section>

      <section className="page-card">
        <h2>Core Focus</h2>
        <div className="skill-grid">
          <div className="skill-box">
            <h4>Backend Engineering</h4>
            <p>
              Java, Spring Boot, APIs, clean architecture, and scalable
              application design.
            </p>
          </div>
          <div className="skill-box">
            <h4>Frontend Engineering</h4>
            <p>
              React, TypeScript, responsive interfaces, and accessible user
              experiences.
            </p>
          </div>
          <div className="skill-box">
            <h4>Data & Cloud</h4>
            <p>
              Python, SQL, dashboards, feature analysis, AWS, and cloud-based
              application deployment.
            </p>
          </div>
          <div className="skill-box">
            <h4>AI & Machine Learning</h4>
            <p>
              Machine learning, neural networks, Embeddings, Vector databases,
              RAG
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
