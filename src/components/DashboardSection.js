import React, { useState, useEffect } from 'react';
import './DashboardSection.css';
import AnimatedSteps from './AnimatedSteps';

const DashboardSection = () => {
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scaling on desktop (screen width > 1024px)
      if (window.innerWidth <= 1024) {
        setScrollScale(1);
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start scaling when user scrolls past 20% of viewport
      const startScrollPoint = windowHeight * 0.1;
      
      // Calculate scale factor based on scroll position
      // Scale from 1 to 0.85 over the next 300px of scrolling
      const maxScroll = startScrollPoint + 150;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - startScrollPoint) / 300));
      
      // Scale from 1.0 to 0.85
      const scale = 1 - (scrollProgress * 0.15);
      setScrollScale(scale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="dashboard-section">
      <AnimatedSteps />
      <div className="dashboard-container">
        <img 
          src="/Ekran Resmi 2025-06-23 21.24.23.png" 
          alt="Recula Dashboard Interface" 
          className="dashboard-image"
          style={{
            transform: `scale(${scrollScale})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
    </section>
  );
};

export default DashboardSection; 