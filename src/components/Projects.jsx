function Projects() {
  const projects = [
    {
      title: 'Vulnerable Shoe E-Commerce Web Application',
      tech: 'Next.js, FastAPI',
      desc: 'Simulated real-world vulnerabilities including Stored XSS and prototype pollution for cybersecurity training. Built exploit scenarios and mitigation techniques.',
    },
    {
      title: 'OrderFlow SaaS Deployment',
      tech: 'JavaScript, Cloud',
      desc: 'Deployed a SaaS platform on EC2 with reverse proxy and process management.',
    },
    {
      title: 'AI API Key Scanner',
      tech: 'Python',
      desc: 'Developed a tool to detect exposed API keys in public repositories with pattern matching and validation. Implemented caching and automated reporting.',
    },
    {
      title: 'Media Server (Homelab Image Hosting)',
      tech: 'FastAPI',
      desc: 'Built a secure image hosting service using HMAC-based authentication and REST APIs for upload and retrieval.',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-card">
              <h3>{p.title}</h3>
              <span className="project-tech">{p.tech}</span>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
