import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'E-Rickshaw Battery',
    description: 'High capacity lithium-ion battery designed specifically for electric rickshaws. Ensures longer range and durability.',
    details: 'Our E-Rickshaw batteries are built to withstand the toughest road conditions. They offer a life span of over 5 years, require absolutely zero maintenance, and provide 30% more range compared to traditional lead-acid batteries. Built-in BMS ensures safety from overcharging and short circuits.',
    image: '/file_00000000389481f58987fd2b23e8b621.png',
    voltage: '48V / 60V',
    capacity: '80Ah - 120Ah',
    warranty: '3 Years'
  },
  {
    id: 2,
    name: 'Electric 2-Wheeler Battery',
    description: 'Lightweight, ultra-fast charging batteries for electric scooters and bikes. Perfect for urban mobility.',
    details: 'Designed for high performance, these batteries power modern 2-wheelers with rapid acceleration and ultra-fast charging (0-80% in just 45 minutes). They are IP67 rated (water and dust resistant) making them perfect for all-weather urban commutes.',
    image: '/file_0000000070ac81fab203a252fce2a59b.png',
    voltage: '48V / 60V / 72V',
    capacity: '20Ah - 40Ah',
    warranty: '3 Years'
  },
  {
    id: 3,
    name: 'Solar Energy Storage',
    description: 'Robust energy storage solutions for residential and commercial solar setups. Maximize your solar investment.',
    details: 'Maximize your solar investment with our high-density energy storage systems. These rack-mountable batteries seamlessly integrate with existing inverters to store excess solar power during the day for use at night. Lifespan of 6000+ cycles.',
    image: '/file_000000009ebc81f59f75d6af6e71b8fc.png',
    voltage: '48V',
    capacity: '100Ah - 200Ah',
    warranty: '5 Years'
  },
  {
    id: 4,
    name: 'Inverter Batteries',
    description: 'Deep cycle lithium batteries for home inverters. Zero maintenance and 3x longer life than lead-acid.',
    details: 'Say goodbye to water top-ups and acid spills. Our drop-in replacement lithium inverter batteries charge 3x faster and last up to 10 years. They take up 50% less space and provide consistent voltage output until fully discharged.',
    image: '/file_00000000ccb481f599d83bfd27aa5c8c.png',
    voltage: '12V / 24V',
    capacity: '50Ah - 200Ah',
    warranty: '5 Years'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">Our Catalog</div>
          <h2>Explore Our <span className="text-gradient">Product Line</span></h2>
          <p>Discover our range of advanced lithium-ion batteries tailored for various applications.</p>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card" onClick={() => openModal(product)}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-specs">
                  <div className="spec">
                    <span className="spec-label">Voltage</span>
                    <span className="spec-value">{product.voltage}</span>
                  </div>
                  <div className="spec-divider"></div>
                  <div className="spec">
                    <span className="spec-label">Capacity</span>
                    <span className="spec-value">{product.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-footer">
          <Link to="/contact-us" className="btn btn-outline btn-lg flex-center mx-auto" style={{ margin: '0 auto', display: 'inline-flex' }}>
            Request Full Catalog <ArrowRight size={20} className="ml-2" style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={closeModal}>
          <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-col">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-info-col">
                <div className="badge mb-2">{selectedProduct.voltage}</div>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-desc">{selectedProduct.details}</p>
                
                <div className="modal-specs-grid">
                  <div className="mspec">
                    <h5>Capacity</h5>
                    <p>{selectedProduct.capacity}</p>
                  </div>
                  <div className="mspec">
                    <h5>Voltage Range</h5>
                    <p>{selectedProduct.voltage}</p>
                  </div>
                  <div className="mspec">
                    <h5>Warranty</h5>
                    <p>{selectedProduct.warranty}</p>
                  </div>
                  <div className="mspec">
                    <h5>Maintenance</h5>
                    <p>Zero</p>
                  </div>
                </div>
                <Link to="/contact-us" className="btn btn-primary w-100 mt-4 flex-center" style={{ display: 'block', textAlign: 'center' }}>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
