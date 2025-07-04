import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Modern HR. Simplified. <span className="hero-brand">Recula</span>
        </h1>
        <p className="hero-subtitle">
        Designed for HR teams, powered by AI—Recula streamlines hiring from day one.
        </p>
        <Link to="/contact" className="hero-cta-btn">
          Request a demo
        </Link>
      </div>
    </section>
  );
};

export default HeroSection; 