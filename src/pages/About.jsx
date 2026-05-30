import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1>About Us</h1>
          <p>Learn about our journey, mission, and the team behind Creative Arts</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-main-image">
              <img src="/images/about-us-cnc.jpg" alt="About Creative Arts CNC" />
            </div>
            <div className="about-main-text">
              <h6>OUR STORY</h6>
              <h2>Passion for Precision &amp; Creativity</h2>
              <p>
                Creative Arts was founded with a vision to bridge the gap between
                traditional craftsmanship and modern manufacturing technology. We
                specialize in CNC machining, laser cutting, and custom design
                solutions that cater to diverse industries.
              </p>
              <p>
                Our state-of-the-art facility houses the latest CNC routers, laser
                cutters, and precision machinery, enabling us to handle projects of
                any scale — from intricate prototypes to large production runs.
              </p>
              <p>
                Every project we undertake reflects our commitment to quality,
                precision, and client satisfaction. We work closely with our
                clients to understand their needs and deliver solutions that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h6>WHY CHOOSE US</h6>
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">&#9881;</div>
              <h4>Precision Engineering</h4>
              <p>
                Every cut, every detail is executed with meticulous accuracy
                using advanced CNC technology and quality-controlled processes.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#9733;</div>
              <h4>Quality Assurance</h4>
              <p>
                We maintain the highest standards of quality at every stage,
                from material selection to final finishing and delivery.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#128161;</div>
              <h4>Innovation</h4>
              <p>
                We continuously invest in the latest technology and techniques
                to provide cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#129309;</div>
              <h4>Client Partnership</h4>
              <p>
                We believe in building long-term relationships with our clients
                through transparent communication and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section-dark section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', marginBottom: '15px' }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
            Let us help bring your vision to life with precision and creativity.
          </p>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
