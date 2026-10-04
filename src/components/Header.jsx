import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Products', href: '/#products', isHash: true, isMega: true,
      megaItems: [
        { name: 'Automotive Lithium Battery', img: '/file_00000000389481f58987fd2b23e8b621.png' },
        { name: 'Inverter Lithium Battery', img: '/file_00000000ccb481f599d83bfd27aa5c8c.png' },
        { name: 'Lithium Battery Solar Application', img: '/file_000000009ebc81f59f75d6af6e71b8fc.png' },
        { name: 'Drone Lithium Battery', img: '/file_000000001ab481fa9b533029d5d47ab6.png' },
        { name: 'EV Charger', img: '/file_0000000070ac81fab203a252fce2a59b.png' },
        { name: 'Inverter', img: '/file_00000000ec848230afb049f07efcb987.png' },
      ]
    },
    { name: 'Team', href: '/management' },
    {
      name: 'Investor Relations', href: '/investor-relations',
      dropdown: [
        { name: 'Annual Returns', href: '/investor-relations/annual-returns' },
        { name: 'Financials', href: '/investor-relations/financials' },
        { name: 'Policies', href: '/investor-relations/policies' },
        { name: 'MOA & AOA', href: '/investor-relations/moa-aoa' },
        { name: 'Statutory Committee', href: '/investor-relations/statutory-committee' },
        { name: 'Terms & Condition of Appointment of Independent Director', href: '/investor-relations/terms' }
      ]
    },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled glass' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <picture className="site-logo">
              <source media="(max-width: 768px)" srcSet="/Logo/Icon.png" />
              <img src="/Logo/Logo.png" alt="MotoMax EV" />
            </picture>
          </Link>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className={`nav-item ${link.dropdown ? 'has-dropdown' : ''} ${link.isMega ? 'has-mega' : ''}`}>
                {link.isHash ? (
                  <a href={link.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                    {(link.dropdown || link.isMega) && <ChevronDown size={16} className="ml-1 dropdown-icon" />}
                  </a>
                ) : (
                  <Link to={link.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                    {(link.dropdown || link.isMega) && <ChevronDown size={16} className="ml-1 dropdown-icon" />}
                  </Link>
                )}

                {/* Standard Dropdown */}
                {link.dropdown && (
                  <div className="dropdown-menu shadow-lg">
                    <ul>
                      {link.dropdown.map(dropItem => (
                        <li key={dropItem.name}>
                          <Link to={dropItem.href} className="dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                            {dropItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mega Menu for Products */}
                {link.isMega && (
                  <div className="mega-menu shadow-lg">
                    <div className="mega-menu-grid">
                      {link.megaItems.map(item => (
                        <div key={item.name} className="mega-item">
                          <Link to={`/#products`} className="mega-item-link" onClick={() => setMobileMenuOpen(false)}>
                            <div className="mega-img-container">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <span className="mega-title">{item.name}</span>
                          </Link>
                          {item.sub && (
                            <div className="mega-sub-categories">
                              {item.sub.map(subItem => (
                                <Link key={subItem} to={`/#products`} className="mega-sub-link" onClick={() => setMobileMenuOpen(false)}>
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="header-actions">
            <Link to="/contact-us" className="btn btn-primary">Get a Quote</Link>
          </div>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
