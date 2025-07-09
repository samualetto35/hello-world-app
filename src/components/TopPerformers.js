import React from 'react';
import './TopPerformers.css';

const TopPerformers = () => {
  const performers = [
    {
      name: 'Kaan Uysal',
      email: 'kaan.uysal@example.com',
      score: 93,
      metrics: [94, 90, 95, 93]
    },
    {
      name: 'Zeynep İleri',
      email: 'zeynep.ileri@example.com', 
      score: 91,
      metrics: [92, 90, 91, 91]
    },
    {
      name: 'Acar Uçar',
      email: 'acar.ucar@example.com',
      score: 89,
      metrics: [89, 90, 86, 89]
    }
  ];

  return (
    <div className="top-performers">
      <div className="performers-header">
        <h3>Top Performers</h3>
        <p>Here are our best top performers based on recent interviews and test scores.</p>
      </div>
      
      <div className="performers-list">
        {performers.map((performer, index) => (
          <div key={index} className="performer-item">
            <div className="performer-info">
              <div className="performer-name">{performer.name}</div>
              <div className="performer-email">{performer.email}</div>
            </div>
            
            <div className="performer-metrics">
              <div className="score-display">{performer.score}</div>
              <div className="mini-bars">
                {performer.metrics.map((metric, idx) => (
                  <div key={idx} className="mini-bar">
                    <div 
                      className="mini-bar-fill"
                      style={{ height: `${metric}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="show-all">
        <span>Show all</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default TopPerformers; 