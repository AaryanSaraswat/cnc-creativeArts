import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img
              src="/images/Creative-Arts-Logo-png-white-large.png"
              alt="Creative Arts"
              className="footer-logo"
            />
            <p>
              Transforming ideas into reality through precision CNC machining,
              laser cutting, and creative artistry since our establishment.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">CNC Machining</Link></li>
              <li><Link to="/services">CNC Router Cutting</Link></li>
              <li><Link to="/services">Laser Cutting</Link></li>
              <li><Link to="/services">Custom Design</Link></li>
              <li><Link to="/services">Prototyping</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <span className="icon">&#9993;</span>
                info@creativearts.co.in
              </li>
              <li>
                <span className="icon">&#9742;</span>
                +91 XXXX XXXX XX
              </li>
              <li>
                <span className="icon">&#9873;</span>
                India
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Creative Arts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
