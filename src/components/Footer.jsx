import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <picture className="site-logo">
                <source media="(max-width: 768px)" srcSet="/Logo/Icon.png" />
                <img src="/Logo/Logo.png" alt="MotoMax EV" />
              </picture>
            </div>
            <p className="footer-desc">
              India's leading manufacturer of advanced lithium-ion batteries. Powering the EV revolution with reliable, safe, and high-performance energy solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FacebookIcon /></a>
              <a href="#" className="social-icon"><TwitterIcon /></a>
              <a href="#" className="social-icon"><InstagramIcon /></a>
              <a href="#" className="social-icon"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><a href="/#products">Products</a></li>
              <li><Link to="/management">Team</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="/#products">E-Rickshaw Batteries</a></li>
              <li><a href="/#products">2-Wheeler Batteries</a></li>
              <li><a href="/#products">Solar Energy Storage</a></li>
              <li><a href="/#products">Inverter Batteries</a></li>
              <li><a href="/#products">Accessories</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <p>123 Tech Park, Industrial Area, New Delhi, India 110020</p>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <p>info@trontek.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Trontek Group. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/investor-relations/policies">Privacy Policy</Link>
            <Link to="/investor-relations/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
