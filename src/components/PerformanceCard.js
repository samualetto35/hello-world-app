import React from 'react';
import './PerformanceCard.css';

const PerformanceCard = () => {
  return (
    <div className="performance-card">
      <div className="performance-header">
        <h3>Good morning Aslı,</h3>
        <h2>Average <span className="highlight">Performance</span></h2>
      </div>
      
      <div className="performance-subtitle">
        Yönetim Müdürlüğü Sağlık Aflar güvenliğin var
      </div>
      
      <div className="performance-score">
        <div className="grade">B+</div>
        <div className="percentage">84%</div>
      </div>
      
      <div className="performance-description">
        aile işlerleri çucuklar formalı fizdir
      </div>
    </div>
  );
};

export default PerformanceCard; 