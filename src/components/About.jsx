function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              Cybersecurity enthusiast from Kathmandu, Nepal, currently pursuing
              a BSc (Hons) in Computer Networking &amp; IT Security at Islington College.
              I focus on offensive security, vulnerability assessment, and cloud infrastructure.
            </p>
            <p>
              My career objective centers on contributing to resilient and secure
              digital infrastructures — identifying vulnerabilities, strengthening
              system defenses, and applying offensive security techniques to enhance
              overall security posture. I am committed to continuous learning in
              network security, threat analysis, and vulnerability assessment.
            </p>
            <p>
              Through workshops at ING Skill Academy and projects at TechnoUniverse,
              I have developed strong problem-solving abilities and a meticulous
              attention to detail — essential qualities in the cybersecurity field.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Address</span>
              <span className="detail-value">Lazimpat, Kathmandu</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">GitHub</span>
              <a href="https://github.com/SuhasBajracharya" className="detail-value" target="_blank" rel="noreferrer">SuhasBajracharya</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:suhasb161@gmail.com" className="detail-value">suhasb161@gmail.com</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+977-9841061742</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">LinkedIn</span>
              <a href="https://linkedin.com/in/suhas-bajracharya" className="detail-value" target="_blank" rel="noreferrer">Suhas Bajracharya</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
