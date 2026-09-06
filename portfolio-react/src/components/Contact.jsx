function Contact() {
  const contactItems = [
    { label: 'Email', value: 'suhasb161@gmail.com', href: 'mailto:suhasb161@gmail.com' },
    { label: 'Phone', value: '+977-9841061742', href: 'tel:+9779841061742' },
    { label: 'Address', value: 'Lazimpat, Kathmandu', href: null },
    { label: 'GitHub', value: 'SuhasBajracharya', href: 'https://github.com/SuhasBajracharya' },
    { label: 'LinkedIn', value: 'Suhas Bajracharya', href: 'https://linkedin.com/in/suhas-bajracharya' },
  ];

  const refItem = {
    name: 'Satyam Regmi',
    role: 'Frontend Developer, ING Skill Academy',
    phone: '9803118764',
    email: 'sregmi986@gmail.com',
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Feel free to reach out through any of the channels below.
            </p>
            <div className="contact-list">
              {contactItems.map((item, idx) => (
                <div key={idx} className="contact-item">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-value" target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="contact-ref">
            <h3>References</h3>
            <div className="ref-card">
              <p className="ref-name">{refItem.name}</p>
              <p className="ref-role">{refItem.role}</p>
              <p>Phone: {refItem.phone}</p>
              <p>Email: {refItem.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
