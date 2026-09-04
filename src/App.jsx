import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="portfolio-wrapper">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Ashish Shrivastav home">
          <span className="brand-mark">AS</span>
          <span>Ashish Shrivastav<span className="brand-dot">.</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="nav-cta">Let's talk <span>↗</span></a>
        </nav>
      </header>

      <main id="top" className="bento-grid">
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Ashish Shrivastav</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

export default App;
