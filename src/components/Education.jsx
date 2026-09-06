function Education() {
  const schools = [
    {
      degree: 'BSc (Hons) Computer Networking & IT Security',
      institution: 'Islington College',
      location: 'Kamal Marg, Kamalpokhari, Kathmandu',
      period: '2025 – Present',
    },
    {
      degree: 'SLC (Science)',
      institution: 'Xavier Academy',
      location: 'Lazimpat, Kathmandu',
      period: '2022 – 2024',
    },
    {
      degree: 'SEE',
      institution: 'Brihaspati Vidyasadan School',
      location: 'Naxal, Kathmandu',
      period: '2022',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {schools.map((s, idx) => (
            <div key={idx} className="education-card">
              <h3>{s.degree}</h3>
              <p className="edu-institution">{s.institution}</p>
              <p className="edu-location">{s.location}</p>
              <span className="edu-period">{s.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
