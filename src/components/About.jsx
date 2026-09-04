function About() {
  return (
    <section id="about" className="card card-about">
      <div className="section-heading"><span className="section-number">01</span><span>About me</span></div>
      <div className="about-layout">
        <div>
          <h2>I build <span className="accent">digital experiences</span> that are useful, not just beautiful.</h2>
        </div>
        <div>
          <p>
            I'm a passionate developer focused on building modern, responsive and user-friendly web applications.
            My background in networking and hands-on development helps me approach products from both a technical and practical perspective.
          </p>
          <p className="about-note">Currently exploring deeper frontend architecture, backend APIs and better product design.</p>
        </div>
      </div>
      <div className="about-highlights">
        <div className="highlight"><span className="highlight-icon">01</span><div><h4>Problem solving</h4><p>Break complex requirements into clear, maintainable solutions.</p></div></div>
        <div className="highlight"><span className="highlight-icon">02</span><div><h4>Performance minded</h4><p>Build interfaces that feel responsive, lightweight and reliable.</p></div></div>
        <div className="highlight"><span className="highlight-icon">03</span><div><h4>Always learning</h4><p>Continuously improving my tools, patterns and development workflow.</p></div></div>
      </div>
    </section>
  );
}
export default About;
