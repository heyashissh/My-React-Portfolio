function Experience() {
  const experiences = [
    { title: "Network Engineer", company: "FiberStory Pvt. Ltd.", period: "2023 — 2024", description: "Configured network devices, coordinated with vendors and supported reliable network operations." },
    { title: "Field Engineer", company: "Swastik Enterprises", period: "2020 — 2021", description: "Handled Windows installation, hardware assembly, troubleshooting and networking tasks." },
  ];
  return (
    <section id="experience" className="card card-experience">
      <div className="section-heading"><span className="section-number">03</span><span>Experience</span></div>
      <h2>Career <span className="accent">path</span></h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.company} className="timeline-item">
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span>{exp.period}</span></div>
              <h3>{exp.title}</h3><p className="company">{exp.company}</p><p className="description">{exp.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Experience;
