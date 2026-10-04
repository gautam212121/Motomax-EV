import { Battery, ShieldCheck, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Battery size={32} />,
      title: 'High Energy Density',
      description: 'Our batteries store more energy in less space, reducing weight while maximizing output.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Ultra-Fast Charging',
      description: 'Advanced cell chemistry allows for rapid charging without compromising battery lifespan.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Smart BMS',
      description: 'Integrated Battery Management System protects against overcharging, overheating, and short circuits.'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and zero emissions make our products the perfect choice for a green future.'
    }
  ];

  return (
    <section className="features" id="technology">
      <div className="container">
        <div className="features-inner">
          <div className="features-content">
            <div className="badge">Our Technology</div>
            <h2>Next Generation <span className="text-gradient">Power Solutions</span></h2>
            <p>
              At Trontek, we integrate cutting-edge technology with rigorous quality control to deliver 
              batteries that outperform conventional alternatives in every metric.
            </p>
            <ul className="feature-list">
              <li>✓ Advanced Thermal Management</li>
              <li>✓ High Cycle Life (Up to 3000 cycles)</li>
              <li>✓ IP67 Water & Dust Resistance</li>
              <li>✓ Seamless IoT Integration</li>
            </ul>
            <Link to="/about-us" className="btn btn-primary mt-4">Learn More About Tech</Link>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
