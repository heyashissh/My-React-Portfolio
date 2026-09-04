import React from "react";
// import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind",
        "JavaScript",
        "React.js"
      ]
    },
    {
      number: "01",
      title: "Backend",
      skills: [
        "Express.js",
        "Node.js",
        "MongoDB",
      ]
    },
    {
      number: "02",
      title: "Programming & Data",
      skills: [
        "Python",
        "NumPy"
      ]
    },
    {
      number: "03",
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "REST APIs"
      ]
    }
  ];

  return (
    <section id="skills" className="card card-skills">

      <div className="section-heading">
        <span className="section-number">02</span>
        <span>Skills</span>
      </div>

      <h2>
        Technologies I <span className="accent">work with</span>
      </h2>

      <p className="skills-description">
        A focused set of technologies and tools I use to build
        modern, responsive and user-friendly applications.
      </p>

      <div className="skills-grid">

        {skillCategories.map((category) => (
          <div
            className="skill-category"
            key={category.title}
          >

            <div className="skill-top">
              <span>{category.number}</span>

              <strong>
                {category.title}
              </strong>
            </div>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;