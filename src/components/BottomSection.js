import React from 'react';
import './BottomSection.css';

const BottomSection = () => {
  return (
    <div className="bottom-section">
      <div className="bottom-left">
        <div className="notes-card">
          <div className="card-header">
            <span className="card-title">My Notes</span>
          </div>
          <div className="card-content">
            <div className="expand-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 13L10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7L10 4L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="persona-card">
          <div className="card-header">
            <span className="card-title">Persona</span>
          </div>
          <div className="card-content">
            <div className="expand-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 13L10 10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7L10 4L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bottom-right">
        <div className="analytics-chart">
          <div className="chart-header">
            <div className="chart-tabs">
              <button className="chart-tab">Last Job Interview</button>
              <button className="chart-tab active">Overall</button>
            </div>
          </div>
          
          <div className="chart-content">
            <div className="chart-bars">
              {[20, 35, 45, 30, 50, 70, 85, 75, 60, 40, 25, 15].map((height, index) => (
                <div key={index} className="chart-bar">
                  <div 
                    className="bar-fill"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection; 