import {
  achievements,
  certifications,
  experienceItems,
} from "../data/siteData";

export default function ExperiencePage() {
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
