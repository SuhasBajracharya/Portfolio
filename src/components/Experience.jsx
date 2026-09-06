function Experience() {
  const jobs = [
    {
      title: 'Cybersecurity Intern',
      company: 'ING Skill Academy',
      period: '2024 – Present',
      bullets: [
        'Delivered workshops on ethical hacking, network security, and threat awareness',
        'Developed offensive security demonstrations including BadUSB payloads',
        'Created cybersecurity training materials and hands-on lab exercises',
      ],
    },
    {
      title: 'Co-Founder',
      company: 'TechnoUniverse',
      period: '2026 – Present',
      bullets: [
        'Built and deployed production-grade SaaS applications',
        'Deployed OrderFlow on AWS EC2 with NGINX and PM2',
        'Managed cloud infrastructure, server configuration, and deployment pipelines',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {jobs.map((job, idx) => (
            <div key={idx} className="experience-card">
              <div className="exp-header">
                <h3>{job.title}</h3>
                <span className="exp-company">{job.company}</span>
                <span className="exp-period">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
