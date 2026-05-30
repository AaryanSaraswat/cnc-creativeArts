import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h6>WELCOME TO CREATIVE ARTS</h6>
          <h1>Precision CNC Machining &amp; Creative Artistry</h1>
          <p>
            We bring your ideas to life with state-of-the-art CNC technology,
            laser cutting, and expert craftsmanship. Quality and precision in
            every detail.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h6>WHAT WE DO</h6>
            <h2>Our Services</h2>
            <p>
              We offer a comprehensive range of CNC machining and creative
              services to meet your manufacturing and design needs.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/cnc-router.png" alt="CNC Router Cutting" />
              </div>
              <h4>CNC Router Cutting</h4>
              <p>
                High-precision router cutting for wood, acrylic, MDF, and
                composite materials. Complex shapes and patterns with
                exceptional accuracy.
              </p>
              <Link to="/services" className="service-link">Learn More &rarr;</Link>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/laser-cutting.png" alt="Laser Cutting" />
              </div>
              <h4>Laser Cutting</h4>
              <p>
                Advanced laser cutting technology for metals, plastics, and
                specialty materials. Clean edges and intricate detail work
                with minimal waste.
              </p>
              <Link to="/services" className="service-link">Learn More &rarr;</Link>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/CNC-Machine-196_ffff.jpg" alt="CNC Machining" />
              </div>
              <h4>CNC Machining</h4>
              <p>
                Full-service CNC machining capabilities for prototyping and
                production runs. Turning, milling, and multi-axis operations
                for complex parts.
              </p>
              <Link to="/services" className="service-link">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section section-dark about-preview">
        <div className="about-bg-overlay"></div>
        <div className="container about-preview-inner">
          <div className="about-image">
            <img src="/images/about-us-cnc.jpg" alt="About Creative Arts" />
          </div>
          <div className="about-text">
            <h6>ABOUT US</h6>
            <h2>Crafting Excellence Through Technology</h2>
            <p>
              At Creative Arts, we merge traditional craftsmanship with modern
              CNC technology to deliver outstanding results. Our team of skilled
              professionals is dedicated to bringing your visions to life with
              precision and artistry.
            </p>
            <ul className="about-features">
              <li>State-of-the-art CNC machinery</li>
              <li>Experienced team of artisans and engineers</li>
              <li>Custom solutions for every project</li>
              <li>Quality assurance at every step</li>
            </ul>
            <Link to="/about" className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section portfolio-preview">
        <div className="container">
          <div className="section-title">
            <h6>OUR WORK</h6>
            <h2>Recent Projects</h2>
            <p>
              Browse through some of our recent creative arts and CNC
              machining projects.
            </p>
          </div>
          <div className="portfolio-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div className="portfolio-item" key={num}>
                <img
                  src={`/images/CREATIVE-ARTS-${String(num).padStart(3, '0')}.jpg`}
                  alt={`Creative Arts Project ${num}`}
                />
                <div className="portfolio-overlay">
                  <span>View Project</span>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-cta">
            <Link to="/portfolio" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-light testimonials-section">
        <div className="container">
          <div className="section-title">
            <h6>TESTIMONIALS</h6>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                "Creative Arts delivered exceptional quality on our CNC project.
                The attention to detail and precision was outstanding. Highly
                recommended for any manufacturing needs."
              </p>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <span>Manufacturing Director</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                "We have been working with Creative Arts for our laser cutting
                requirements. Their turnaround time and quality are consistently
                excellent. A reliable partner for our business."
              </p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Design Studio Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                "The team at Creative Arts transformed our concept into reality
                with their CNC routing expertise. Professional service and
                remarkable craftsmanship every time."
              </p>
              <div className="testimonial-author">
                <strong>Amit Patel</strong>
                <span>Architect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let us bring your ideas to life with precision and creativity.
            Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
