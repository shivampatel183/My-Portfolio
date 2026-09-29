import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

function BlogSeo({ post }) {
  useEffect(() => {
    const url = `${window.location.origin}/blogs/${post.slug}`;
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

export default function BlogPostPage() {
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
      <div className="blog-post-heading">
        <h1>{post.title}</h1>
      </div>
      <p className="blog-meta">
        {post.date} • {post.readTime}
      </p>
      <div className="blog-content">
        {post.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2 id={headingId(block.text)} key={index}>
                {block.text}
              </h2>
            );
          }
          if (block.type === "subheading") {
            return <h3 key={index}>{block.text}</h3>;
          }
          if (block.type === "example") {
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
                      {/* <span className="example-step-number">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span> */}
                      <div>
                        <strong>{step.label}</strong>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            );
          }
          if (block.type === "vector-diagram") {
            return (
              <figure className="vector-figure" key={index}>
                <figcaption>{block.title}</figcaption>
                <svg
                  className="vector-map"
                  viewBox="0 0 720 310"
                  role="img"
                  aria-labelledby="vector-map-title vector-map-desc"
                >
                  <title id="vector-map-title">
                    Illustrative map of embedding similarity
                  </title>
                  <desc id="vector-map-desc">
                    Password and login examples cluster close together, while an
                    unrelated recipe example sits farther away.
                  </desc>
                  <path className="vector-axis" d="M58 265H680M58 265V32" />
                  <path
                    className="vector-connection"
                    d="M286 146L355 171L416 130"
                  />
                  <circle
                    className="vector-dot vector-dot-query"
                    cx="286"
                    cy="146"
                    r="12"
                  />
                  <circle
                    className="vector-dot vector-dot-match"
                    cx="355"
                    cy="171"
                    r="12"
                  />
                  <circle
                    className="vector-dot vector-dot-match"
                    cx="416"
                    cy="130"
                    r="12"
                  />
                  <circle
                    className="vector-dot vector-dot-far"
                    cx="590"
                    cy="72"
                    r="12"
                  />
                  <text x="220" y="119">
                    Your question
                  </text>
                  <text x="310" y="211">
                    Forgot login credentials
                  </text>
                  <text x="425" y="123">
                    Reset password guide
                  </text>
                  <text x="505" y="48">
                    Banana bread recipe
                  </text>
                  <text className="vector-axis-label" x="60" y="292">
                    Conceptual meaning space — not real vector coordinates
                  </text>
                </svg>
                <p>{block.description}</p>
                <div className="vector-legend">
                  <span>
                    <i className="legend-close" /> Similar meaning
                  </span>
                  <span>
                    <i className="legend-far" /> Unrelated meaning
                  </span>
                </div>
              </figure>
            );
          }
          if (block.type === "diagram") {
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
          }
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
      <Link className="project-link" to="/blog">
        ← Back to blog
      </Link>
    </article>
  );
}
