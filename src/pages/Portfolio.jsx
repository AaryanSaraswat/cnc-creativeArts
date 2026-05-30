import { useState } from 'react';
import './Portfolio.css';

const portfolioItems = Array.from({ length: 17 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0');
  const suffix = i === 5 ? '_' : '';
  return {
    id: i + 1,
    image: `/images/CREATIVE-ARTS-${num}${suffix}.jpg`,
    title: `Creative Arts Project ${i + 1}`,
    category: i % 3 === 0 ? 'CNC Work' : i % 3 === 1 ? 'Laser Cutting' : 'Custom Design',
  };
});

const categories = ['All', 'CNC Work', 'Laser Cutting', 'Custom Design'];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1>Our Portfolio</h1>
          <p>
            Explore our collection of CNC machining, laser cutting, and
            creative art projects
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-gallery-grid">
            {filtered.map((item) => (
              <div
                className="portfolio-gallery-item"
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="portfolio-gallery-overlay">
                  <span className="portfolio-gallery-title">{item.title}</span>
                  <span className="portfolio-gallery-cat">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h4>{selectedImage.title}</h4>
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
