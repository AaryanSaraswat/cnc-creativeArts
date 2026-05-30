import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'CNC Router Cutting',
    image: '/images/cnc-router.png',
    description:
      'Our advanced CNC routers deliver precise cutting for wood, acrylic, MDF, foam, and composite materials. From architectural panels to custom signage, we handle complex 2D and 3D cutting with exceptional accuracy.',
    features: [
      'Multi-axis cutting capability',
      'Wood, acrylic, MDF, foam processing',
      'Complex 2D and 3D profiles',
      'Large format cutting available',
      'Tight tolerance machining',
    ],
  },
  {
    title: 'Laser Cutting',
    image: '/images/laser-cutting.png',
    description:
      'Our laser cutting services deliver clean, precise cuts on metals, plastics, wood, and specialty materials. Ideal for intricate designs, patterns, and industrial components with minimal material waste.',
    features: [
      'Metal and non-metal cutting',
      'Intricate pattern capability',
      'Clean edges, no burrs',
      'Engraving and marking',
      'Rapid prototyping',
    ],
  },
  {
    title: 'CNC Machining',
    image: '/images/CNC-Machine-196_ffff.jpg',
    description:
      'Full-service CNC machining for prototyping, short runs, and production manufacturing. Our precision equipment handles turning, milling, drilling, and multi-axis operations for complex parts.',
    features: [
      'Turning and milling operations',
      'Multi-axis machining',
      'Prototype to production',
      'Various material support',
      'Quality inspection included',
    ],
  },
  {
    title: 'Custom Design & Fabrication',
    image: '/images/cnc-home.png',
    description:
      'From concept to completion, our design team works with you to create custom pieces. We combine artistic vision with technical expertise to produce unique, high-quality fabricated items.',
    features: [
      'Concept to completion service',
      'CAD/CAM design support',
      'Material selection guidance',
      'Finishing and assembly',
      'Project consultation',
    ],
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive CNC machining, laser cutting, and custom fabrication
            services for all your manufacturing needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div
              className={`service-detail ${index % 2 !== 0 ? 'reverse' : ''}`}
              key={service.title}
            >
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h6>HOW WE WORK</h6>
            <h2>Our Process</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h4>Consultation</h4>
              <p>
                We discuss your project requirements, timeline, and budget to
                understand your needs.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h4>Design & Planning</h4>
              <p>
                Our team creates detailed designs and selects the optimal
                manufacturing approach.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h4>Manufacturing</h4>
              <p>
                Precision machining and fabrication using our advanced CNC
                equipment and techniques.
              </p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h4>Quality & Delivery</h4>
              <p>
                Thorough quality inspection before on-time delivery of your
                finished products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>
            Our team is ready to discuss your project. Get in touch for a
            free consultation and quote.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
