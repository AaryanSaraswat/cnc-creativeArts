import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/images/Creative-Arts-Logo-_-f-red.png" alt="Creative Arts" />
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <span className="nav-btn">Contact Us</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
