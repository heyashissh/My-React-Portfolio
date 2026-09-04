function Projects() {
  const projects = [
    { 
      title: "Event Management App",
      description: "A collaborative event and task experience designed for smooth team workflows.", 
      tech: ["HTML", "CSS", "JavaScript", ""], 
      link: "https://event-planning-website-hazel.vercel.app/", 
      label: "01", 
      tone: "purple",
      image: "/The Diplomat of the Year Award.jpg"
    },

    { 
      title: "Portfolio Website", 
      description: "This personal portfolio, redesigned with a clean bento layout and subtle interactions.", 
      tech: ["React", "Vite", "CSS3"], 
      link: "#top", 
      label: "02", 
      tone: "blue", 
      image: "/Portfolio image.png"
    },
    
    { 
      title: "Weather Dashboard", 
      description: "A responsive weather application with real-time location-based forecasts.", 
      tech: ["HTML", "CSS", "JavaScript", "API"], 
      link: "https://weatherappbyashish.netlify.app/", 
      label: "03", 
      tone: "cyan", 
      image: "/Realistic weather widget _ Free Vector.jpg" 
    },
    
    { 
      title: "CivicFix Platform", 
      description: "A civic-focused platform concept built with a modern React frontend and responsive UI.", 
      tech: ["React", "JavaScript", "Tailwind", "Vite"], 
      link: "#", 
      label: "04", 
      tone: "green" 
    },
  ];

  return (
    <section id="projects" className="card card-projects">
      <div className="section-heading"><span className="section-number">04</span><span>Selected work</span></div>
      <div className="projects-heading"><h2>Projects<span className="accent"></span></h2></div>
      <div className="projects-grid">
        {projects.map((project) => (
          <a href={project.link} key={project.title} className={`project-card ${project.tone}`} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}>
            <div className="project-visual">
              {project.image ? <img src={project.image} alt="" /> : <><span className="visual-number">{project.label}</span><div className="visual-window"><span /><span /><span /></div></>}
            </div>
            <div className="project-body"><div className="project-index">{project.label}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.tech.map((t) => <span key={t}>{t}</span>)}</div><div className="project-link">View project <span>↗</span></div></div>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;
