function Contact() {
  const socials = [
    { name: "GitHub", 
      text: "github.com/heyashissh", 
      url: "https://github.com/heyashissh" },

    { name: "LinkedIn", 
      text: "linkedin.com/in/heyashissh", 
      url: "https://www.linkedin.com/in/heyashissh/" },
    
    { name: "X / Twitter", 
      text: "@Hey_ashissh", 
      url: "https://x.com/Hey_ashissh" },
    
    { name: "Email", 
      text: "ashishshrivastav8851@gmail.com", 
      url: "mailto:ashishshrivastav8851@gmail.com" },
  ];
  return (
    <section id="contact" className="card card-contact">
      <div className="contact-copy"><div className="section-heading"><span className="section-number">06</span><span>Contact</span></div><h2>Have an idea?<br /><span className="accent">Let's build it.</span></h2><p>I'm open to interesting projects, collaborations and opportunities where I can learn, contribute and create something useful.</p><a href="mailto:ashishshrivastav8851@gmail.com" className="contact-cta">Start a conversation <span>↗</span></a></div>
      <div className="social-links">{socials.map((social) => <a key={social.name} href={social.url} className="social-link" target={social.url.startsWith("http") ? "_blank" : undefined} rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}><span className="social-name">{social.name}</span><span className="social-value">{social.text}</span><span className="social-arrow">↗</span></a>)}</div>
    </section>
  );
}
export default Contact;
