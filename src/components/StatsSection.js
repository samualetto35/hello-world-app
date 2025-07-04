import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    {
      number: "4x",
      label: "More Candidates Screened"
    },
    {
      number: "84%",
      label: "Human Alignment Score"
    },
    {
      number: "220+",
      label: "Hours Saved per 100 Candidates"
    },
    {
      number: "92%",
      label: "Candidate Completion Rate"
    }
  ];

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        <div className={`stats-description ${isVisible ? 'animate-in' : ''}`}>
          <p className="stats-text">
            <span className="stats-brand">Recula</span> is your AI-powered interview platform, helping HR teams screen candidates faster and more efficiently. It replaces repetitive first-round interviews with dynamic AI conversations—available 24/7. Get structured reports, ranked results, and deeper insights to hire smarter without expanding your team.
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 