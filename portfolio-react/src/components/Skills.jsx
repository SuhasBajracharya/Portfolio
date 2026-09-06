function Skills() {
  const categories = [
    {
      title: 'Cybersecurity',
      items: ['VAPT', 'Web Application Security', 'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'],
    },
    {
      title: 'Programming',
      items: ['Python', 'JavaScript', 'Bash', 'Java', 'C#'],
    },
    {
      title: 'Cloud & Infrastructure',
      items: ['AWS', 'Docker', 'NGINX', 'PM2', 'Cloud Deployment'],
    },
    {
      title: 'Frameworks',
      items: ['FastAPI', 'Flask', 'React'],
    },
    {
      title: 'Operating Systems',
      items: ['Linux', 'Windows', 'macOS'],
    },
    {
      title: 'Dev Tools',
      items: ['Git', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
