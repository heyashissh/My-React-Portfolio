function Resume() {
  return (
    <section id="resume" className="card card-resume">
      <div className="section-heading"><span className="section-number">05</span><span>Resume</span></div>
      <div className="resume-layout">
        <div className="resume-copy">
          <p className="eyebrow">My professional profile</p>
          <h2>Want to know more <span className="accent">about me?</span></h2>
          <p>
            Explore my resume for a quick overview of my skills, experience, education and
            technical background.
          </p>
          <div className="resume-actions">
            <a className="primary-btn" href="/Ashish_Shrivastav_Final_Resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume <span>↗</span>
            </a>
            <a className="secondary-btn" href="/Ashish_Shrivastav_Final_Resume.pdf" download>
              Download PDF <span>↓</span>
            </a>
          </div>
        </div>
        <div className="resume-preview" aria-hidden="true">
          <div className="resume-paper">
            <div className="resume-paper-top"><span>AS</span><i /></div>
            <div className="resume-line large" /><div className="resume-line medium" />
            <div className="resume-columns"><div><i /><i /><i /><i /></div><div><i /><i /><i /></div></div>
            <div className="resume-line small" /><div className="resume-line medium" />
            <div className="resume-columns"><div><i /><i /><i /></div><div><i /><i /><i /><i /></div></div>
          </div>
          <span className="resume-file">PDF · Resume</span>
        </div>
      </div>
    </section>
  );
}

export default Resume;
