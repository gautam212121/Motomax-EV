import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, Users, Calendar, TrendingUp } from 'lucide-react';
import './OtherPages.css';

const PageHero = ({ title, subtitle }) => (
  <div className="page-hero">
    <div className="container">
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>
    </div>
  </div>
);

export const AboutUs = () => (
  <main className="page-wrapper">
    <PageHero title="About MotoMax EV" subtitle="Powering the EV revolution with reliable, safe, and high-performance energy solutions." />
    <section className="page-section container">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="section-title">Our Vision</h2>
          <p>At MotoMax EV, we envision a world where clean, renewable energy powers every journey. Our mission is to accelerate the global transition to sustainable energy by manufacturing the most advanced, durable, and efficient lithium-ion batteries.</p>
          <ul className="check-list mt-4">
            <li>✓ Innovating battery chemistry since 2015</li>
            <li>✓ Over 5 Million units deployed globally</li>
            <li>✓ 100% committed to zero-emission technology</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/file_00000000ec848230afb049f07efcb987.png" alt="MotoMax Facility" />
        </div>
      </div>
    </section>
  </main>
);

export const Team = () => (
  <main className="page-wrapper">
    <PageHero title="Our Management Team" subtitle="The brilliant minds driving innovation at MotoMax EV." />
    <section className="page-section container">
      <div className="team-grid">
        {[1, 2, 3, 4].map((member) => (
          <div key={member} className="team-card">
            <div className="team-avatar">
              <Users size={48} className="text-muted" />
            </div>
            <h3>Executive {member}</h3>
            <p className="team-role">Board of Directors</p>
            <p className="team-desc">With over 20 years of experience in the energy sector, driving strategic growth and technological advancement.</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export const InvestorRelations = () => (
  <main className="page-wrapper">
    <PageHero title="Investor Relations" subtitle="Information and resources for our investors and shareholders." />
    <section className="page-section container">
      <div className="investor-stats">
        <div className="stat-box">
          <TrendingUp size={32} className="text-primary mb-2" />
          <h3>$120M+</h3>
          <p>Annual Revenue</p>
        </div>
        <div className="stat-box">
          <TrendingUp size={32} className="text-primary mb-2" />
          <h3>45%</h3>
          <p>Year-over-Year Growth</p>
        </div>
        <div className="stat-box">
          <TrendingUp size={32} className="text-primary mb-2" />
          <h3>3 Global</h3>
          <p>Manufacturing Hubs</p>
        </div>
      </div>
      <div className="mt-5 text-center">
        <button className="btn btn-primary btn-lg">Download Q3 Financial Report</button>
      </div>
    </section>
  </main>
);

export const NewsEvents = () => (
  <main className="page-wrapper">
    <PageHero title="News & Events" subtitle="Stay updated with the latest happenings at MotoMax EV." />
    <section className="page-section container">
      <div className="news-list">
        {[
          { date: 'Oct 24, 2026', title: 'MotoMax EV Launches Next-Gen Solid State Batteries', type: 'Press Release' },
          { date: 'Sep 12, 2026', title: 'Global Auto Expo 2026 - Join us at Booth #450', type: 'Event' },
          { date: 'Aug 05, 2026', title: 'Expanding Manufacturing Capacity by 200%', type: 'Company News' }
        ].map((news, idx) => (
          <div key={idx} className="news-card">
            <div className="news-meta">
              <span className="badge">{news.type}</span>
              <span className="news-date"><Calendar size={14} className="inline-icon"/> {news.date}</span>
            </div>
            <h3>{news.title}</h3>
            <button className="btn btn-outline mt-3">Read More</button>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Electric Mobility in Asia",
      desc: "How rapid infrastructure development is paving the way for 100% electric adoption by 2030...",
      img: "/file_000000009ebc81f59f75d6af6e71b8fc.png"
    },
    {
      id: 2,
      title: "Maximizing Lithium-ion Battery Lifespan",
      desc: "Top 5 maintenance tips for EV owners to ensure their battery lasts over a decade...",
      img: "/file_0000000070ac81fab203a252fce2a59b.png"
    },
    {
      id: 3,
      title: "Solid State vs Traditional Lithium-ion",
      desc: "A deep dive into the next generation of energy storage and what it means for consumers...",
      img: "/file_00000000ccb481f599d83bfd27aa5c8c.png"
    }
  ];

  return (
    <main className="page-wrapper">
      <PageHero title="MotoMax Blog" subtitle="Insights, tips, and industry news about Electric Vehicles." />
      <section className="page-section container">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="blog-image">
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#" className="read-more">Read Article <ArrowRight size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export const Contact = () => (
  <main className="page-wrapper">
    <PageHero title="Contact Us" subtitle="Get in touch with us for inquiries, support, or partnerships." />
    <section className="page-section container">
      <div className="contact-grid">
        <div className="contact-details">
          <h2 className="section-title">Let's Connect</h2>
          <p className="mb-4">Fill out the form and our team will get back to you within 24 hours.</p>
          <div className="contact-item-large">
            <MapPin className="text-primary" size={24} />
            <div>
              <h4>Headquarters</h4>
              <p>123 Tech Park, Industrial Area, New Delhi, India 110020</p>
            </div>
          </div>
          <div className="contact-item-large">
            <Phone className="text-primary" size={24} />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="contact-item-large">
            <Mail className="text-primary" size={24} />
            <div>
              <h4>Email</h4>
              <p>info@motomaxev.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container glass">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent successfully.'); e.target.reset(); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>
);
