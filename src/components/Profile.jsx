import { useEffect, useState } from "react";

function Profile() {
  const roles = ["Full Stack Developer", "React Developer", "Node.js Developer", "UI/UX Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.substring(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentRole) setTimeout(() => setIsDeleting(true), 1100);
      } else {
        const next = currentRole.substring(0, displayText.length - 1);
        setDisplayText(next);
        if (!next) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 85);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="card card-profile" aria-label="Introduction">
      <div className="hero-grid-glow" />
      <div className="hero-copy">
        <div className="availability"><span /> Available for opportunities</div>
        <p className="eyebrow">Hello, I'm</p>
        <h1>Ashish <span>Shrivastav</span></h1>
        <div className="role">{displayText}<span className="cursor">_</span></div>
        <p className="hero-description">
          I create clean, responsive and practical web experiences with modern JavaScript technologies.
          I enjoy turning ideas into products that feel fast, simple and polished.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="primary-btn">Explore my work <span>↗</span></a>
          <a href="#contact" className="secondary-btn">Contact me</a>
        </div>
        <div className="profile-tech"><span>React</span><i /> <span>Node.js</span><i /> <span>MongoDB</span><i /> <span>JavaScript</span></div>
      </div>

      <div className="hero-visual">
        <div className="visual-ring ring-one" />
        <div className="visual-ring ring-two" />
        <div className="photo-frame">
          <img src="/my-photo.jpeg" alt="Ashish Shrivastav" />
        </div>
        <div className="code-float code-float-one"><span>const</span> developer = <b>"Ashish"</b>;</div>
        <div className="code-float code-float-two"><span>&lt;React /&gt;</span></div>
      </div>
    </section>
  );
}

export default Profile;
