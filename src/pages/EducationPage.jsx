import { educationDetails, skillGroups } from "../data/siteData";

export default function EducationPage() {
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
