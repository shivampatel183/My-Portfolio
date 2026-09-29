import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
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
