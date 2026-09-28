import { Routes, Route, NavLink, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import photo from "./assets/photo.jpg";
import { blogPosts } from "./data/blogPosts";
import {
  projectList,
  educationDetails,
  skillGroups,
  experienceItems,
  certifications,
  achievements,
} from "./data/siteData";
import "./App.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className="page-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/">
            Shivam Patel
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`main-nav ${menuOpen ? "open" : ""}`}
            id="site-navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-main container">{children}</main>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="intro">
        <div className="left">
          <img src={photo} alt="Shivam Patel" />
        </div>
        <div className="right">
          <p className="eyebrow">Engineer • Builder • Learner</p>
          <h1>Shivam Patel</h1>
          <div></div>
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

function EducationPage() {
  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Academic Background</p>
        <h1>Education, Skills, and Technical Foundation</h1>
      </section>

      <section className="page-card">
        {educationDetails.map((item) => (
          <div className="two-col" key={item.school}>
            <div>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </div>
            <div className="meta-right">
              <strong>{item.years}</strong>
              <span>{item.detail}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="page-card">
        <h2>Technical Skills</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-box" key={group.title}>
              <h4>{group.title}</h4>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p className="page-intro">
          A selection of software, data, and systems projects, from business
          applications to technical explorations.
        </p>
      </section>

      <section className="project-grid" aria-label="Project portfolio">
        {projectList.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-art">
              <span>
                {project.index} / {project.category}
              </span>
              <strong>{project.name}</strong>
            </div>
            <div className="project-content">
              <p className="stack">{project.stack}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function BlogPage() {
  const posts = blogPosts.length > 0 ? blogPosts : [];

  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Writing</p>
        <h1>Blog</h1>
        <p className="page-intro">
          Thoughts, experiments, and practical learnings from software
          engineering and daily life.
        </p>
      </section>

      <section className="blog-layout">
        {posts.length === 0 ? (
          <div className="empty-state page-card">
            <h2>No blog posts yet</h2>
            <p>
              Add your first article in the blog data file and it will appear
              here automatically.
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <article className="blog-card page-card" key={post.id}>
              <Link
                className="blog-image-link"
                to={`/blog/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <img
                  className="blog-image"
                  src={post.image}
                  alt={post.imageAlt}
                />
              </Link>
              <span className="blog-tag">{post.category}</span>
              <h2>{post.title}</h2>
              <p className="blog-meta">
                {post.date} • {post.readTime}
              </p>
              <p>{post.excerpt}</p>
              <Link className="project-link" to={`/blog/${post.slug}`}>
                Read article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))
        )}
      </section>
    </>
  );
}

function BlogSeo({ post }) {
  useEffect(() => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const description = post.excerpt.slice(0, 160);
    const imageUrl = new URL(post.image, window.location.origin).href;
    const values = {
      description,
      "og:type": "article",
      "og:title": `${post.title} | Shivam Patel`,
      "og:description": description,
      "og:url": url,
      "og:image": imageUrl,
      "og:image:alt": post.imageAlt,
      "article:published_time": new Date(post.date).toISOString(),
      "article:section": post.category,
      "twitter:title": `${post.title} | Shivam Patel`,
      "twitter:description": description,
      "twitter:image": imageUrl,
      "twitter:image:alt": post.imageAlt,
    };
    const added = [];
    const previousMeta = new Map();
    for (const [name, content] of Object.entries(values)) {
      const property = name.startsWith("og:") || name.startsWith("article:");
      let tag = document.head.querySelector(
        `meta[${property ? "property" : "name"}="${name}"]`,
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(property ? "property" : "name", name);
        document.head.appendChild(tag);
        added.push(tag);
      } else previousMeta.set(tag, tag.content);
      tag.content = content;
    }
    const previousTitle = document.title;
    document.title = `${post.title} | Shivam Patel`;
    let canonical = document.head.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = url;
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      image: imageUrl,
      datePublished: new Date(post.date).toISOString(),
      author: { "@type": "Person", name: "Shivam Patel" },
      mainEntityOfPage: url,
      articleSection: post.category,
    });
    document.head.appendChild(structuredData);
    return () => {
      document.title = previousTitle;
      if (createdCanonical) canonical.remove();
      else canonical.href = previousCanonical;
      previousMeta.forEach((content, tag) => {
        tag.content = content;
      });
      structuredData.remove();
      added.forEach((tag) => tag.remove());
    };
  }, [post]);
  return null;
}

function BlogShare({ post }) {
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}/blog/${post.slug}`;
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(post.title);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this article link:", url);
    }
  };

  return (
    <nav className="blog-share" aria-label="Share this article">
      <span>Share this article</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <button type="button" onClick={copyLink}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </nav>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="page-card">
        <h2>Post not found</h2>
        <p>The requested article could not be found.</p>
        <Link className="project-link" to="/blog">
          Back to blog
        </Link>
      </section>
    );
  }

  const headings = post.content.filter((block) => block.type === "heading");
  const headingId = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <article className="blog-post page-card">
      <BlogSeo post={post} />
      <div className="blog-feature-wrap">
        <img
          className="blog-feature-image"
          src={post.image}
          alt={post.imageAlt}
        />
        <span className="feature-caption">Notes from the build</span>
      </div>
      <p className="eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="blog-meta">
        {post.date} • {post.readTime}
      </p>
      {/* <nav className="blog-toc" aria-label="Article contents">
        <strong>In this article</strong>
        <ul>
          {headings.map((heading) => (
            <li key={heading.text}><a href={`#${headingId(heading.text)}`}>{heading.text}</a></li>
          ))}
        </ul>
      </nav> */}
      <div className="blog-content">
        {post.content.map((block, index) => {
          if (block.type === "heading")
            return (
              <h2 id={headingId(block.text)} key={index}>
                {block.text}
              </h2>
            );
          if (block.type === "subheading")
            return <h3 key={index}>{block.text}</h3>;
          if (block.type === "example")
            return (
              <aside
                className="blog-example"
                key={index}
                aria-label={block.title}
              >
                <h3>{block.title}</h3>
                <div className="example-steps">
                  {block.steps.map((step, stepIndex) => (
                    <div className="example-step" key={step.label}>
                      <span className="example-step-number">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <strong>{step.label}</strong>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            );
          if (block.type === "vector-diagram")
            return (
              <figure className="vector-figure" key={index}>
                <figcaption>{block.title}</figcaption>
                <svg className="vector-map" viewBox="0 0 720 310" role="img" aria-labelledby="vector-map-title vector-map-desc">
                  <title id="vector-map-title">Illustrative map of embedding similarity</title>
                  <desc id="vector-map-desc">Password and login examples cluster close together, while an unrelated recipe example sits farther away.</desc>
                  <path className="vector-axis" d="M58 265H680M58 265V32" />
                  <path className="vector-connection" d="M286 146L355 171L416 130" />
                  <circle className="vector-dot vector-dot-query" cx="286" cy="146" r="12" />
                  <circle className="vector-dot vector-dot-match" cx="355" cy="171" r="12" />
                  <circle className="vector-dot vector-dot-match" cx="416" cy="130" r="12" />
                  <circle className="vector-dot vector-dot-far" cx="590" cy="72" r="12" />
                  <text x="220" y="119">Your question</text>
                  <text x="310" y="211">Forgot login credentials</text>
                  <text x="425" y="123">Reset password guide</text>
                  <text x="505" y="48">Banana bread recipe</text>
                  <text className="vector-axis-label" x="60" y="292">Conceptual meaning space — not real vector coordinates</text>
                </svg>
                <p>{block.description}</p>
                <div className="vector-legend">
                  <span><i className="legend-close" /> Similar meaning</span>
                  <span><i className="legend-far" /> Unrelated meaning</span>
                </div>
              </figure>
            );
          if (block.type === "diagram")
            return (
              <figure className="rag-diagram" key={index}>
                <figcaption>{block.title}</figcaption>
                {block.lanes.map((lane) => (
                  <div className="rag-lane" key={lane.label}>
                    <h3>{lane.label}</h3>
                    <div className="rag-flow">
                      {lane.steps.map((step, stepIndex) => (
                        <div className="rag-flow-item" key={step}>
                          <div className="rag-node">{step}</div>
                          {stepIndex < lane.steps.length - 1 && (
                            <span className="rag-arrow" aria-hidden="true">
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p className="rag-note">
                  At question time, relevant stored chunks are sent to Gemini as
                  context. Source data stays in your application and database.
                </p>
              </figure>
            );
          if (block.type === "list") {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
      <BlogShare post={post} />
      <Link className="project-link" to="/blog">
        ← Back to blog
      </Link>
    </article>
  );
}

function ExperiencePage() {
  return (
    <>
      <section className="page-hero small-hero">
        <p className="eyebrow">Professional Growth</p>
        <h1>Experience, Certifications, and Achievements</h1>
      </section>

      <section className="page-card">
        <h2>Professional Experience</h2>
        <div className="experience-list">
          {experienceItems.map((item) => (
            <div className="exp-item" key={item.role}>
              <div>
                <span className="badge">{item.badge}</span>
                <h3>{item.role}</h3>
              </div>
              <div>
                <p>
                  <strong>{item.company}</strong>
                </p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-card">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-box" key={cert.title}>
              <h4>{cert.title}</h4>
              <p>{cert.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-card">
        <h2>Achievements</h2>
        <ul className="highlight-list">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ContactPage() {
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
      alert(
        "Something went wrong while sending the message. Please try again.",
      );
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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
