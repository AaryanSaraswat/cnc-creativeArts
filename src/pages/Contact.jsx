import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for any inquiries, quotes, or project
            discussions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-panel">
              <h3>Get In Touch</h3>
              <p>
                Have a project in mind? We would love to hear from you. Send us a
                message and we will respond as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">&#9993;</div>
                  <div>
                    <h6>EMAIL</h6>
                    <span>info@creativearts.co.in</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon">&#9742;</div>
                  <div>
                    <h6>PHONE</h6>
                    <span>+91 9868627702</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon">&#9873;</div>
                  <div>
                    <h6>LOCATION</h6>
                    <span>Plot no 5, near Metro pillar no 484, Swaran Park, Mundka, New Delhi, Delhi, 110041</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h6>FOLLOW US</h6>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">&#102;</a>
                  <a href="#" aria-label="Twitter">&#116;</a>
                  <a href="#" aria-label="Instagram">&#105;</a>
                  <a href="#" aria-label="LinkedIn">&#108;</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">&#10003;</div>
                  <h3>Thank You!</h3>
                  <p>
                    Thanks for contacting us! We will be in touch with you
                    shortly.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
