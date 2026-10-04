import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/file_000000001ab481fa9b533029d5d47ab6.png',
      title: 'POWERING THE FUTURE',
      subtitle: 'Advanced Lithium Technology for a Sustainable Tomorrow',
      link: '/#products',
      isHash: true
    },
    {
      id: 2,
      image: '/file_00000000ec848230afb049f07efcb987.png',
      title: 'INTRODUCING MOTOMAX EKOM BESS',
      subtitle: 'Battery Energy Storage System for the Next Generation',
      link: '/news-events',
      isHash: false
    },
    {
      id: 3,
      image: '/file_00000000ccb481f599d83bfd27aa5c8c.png',
      title: "INDIA'S LEADING ENERGY TECHNOLOGY COMPANY",
      subtitle: 'Pioneering the EV Revolution Across the Globe',
      link: '/about-us',
      isHash: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-slider-section" id="home">
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide image-slide">
            <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div className="slide-overlay">
              <div className="container text-center">
                {/* Apply animation only to the active slide to re-trigger it */}
                <h1 className={`slide-title ${currentSlide === index ? 'animate-fade-in-up' : ''}`}>
                  {slide.title}
                </h1>
                <p className={`slide-subtitle ${currentSlide === index ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
                  {slide.subtitle}
                </p>
                <div className={`${currentSlide === index ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
                  {slide.isHash ? (
                    <a href={slide.link} className="btn btn-primary btn-lg mt-4 flex-center mx-auto" style={{ margin: '0 auto', display: 'inline-flex' }}>
                      Explore More <ArrowRight size={20} className="ml-2" style={{ marginLeft: '8px' }} />
                    </a>
                  ) : (
                    <Link to={slide.link} className="btn btn-primary btn-lg mt-4 flex-center mx-auto" style={{ margin: '0 auto', display: 'inline-flex' }}>
                      Explore More <ArrowRight size={20} className="ml-2" style={{ marginLeft: '8px' }} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button className="slider-nav prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="slider-nav next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
