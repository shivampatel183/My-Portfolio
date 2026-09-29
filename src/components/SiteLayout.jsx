import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
