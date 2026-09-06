function Certifications() {
  const items = [
    {
      title: 'AWS Academy Cloud Architecting',
      detail: 'ID: 160138',
      date: '10th April 2026',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      detail: 'ID: 160137',
      date: '9th April 2026',
    },
    {
      title: 'Advent of Cyber 2024',
      detail: 'TryHackMe',
      date: '30th December 2024',
    },
    {
      title: 'Hackfinity Battle CTF Challenge',
      detail: '',
      date: '20th March 2025',
    },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Training & Certifications</h2>
        <div className="cert-grid">
          {items.map((item, idx) => (
            <div key={idx} className="cert-card">
              <h3>{item.title}</h3>
              {item.detail && <p className="cert-detail">{item.detail}</p>}
              <p className="cert-date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
