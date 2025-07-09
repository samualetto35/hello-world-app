import React from 'react';
import './AnalyticsSection.css';

const AnalyticsSection = () => {
  return (
    <div className="analytics-section">
      <h3 className="analytics-title">Analytics</h3>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="card-header">
            <span className="card-title">Parameter Correlation Matrix</span>
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
        
        <div className="analytics-card highlighted">
          <div className="card-header">
            <span className="card-title">Score Distribution</span>
          </div>
          <div className="card-content">
            <div className="chart-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 3L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9L21 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 15L21 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="analytics-card alert">
          <div className="card-header">
            <div className="alert-dot"></div>
            <span className="card-title">Recruiter Performance AI Insights</span>
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
        
        <div className="analytics-card">
          <div className="card-header">
            <span className="card-title">Recent Activity</span>
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
    </div>
  );
};

export default AnalyticsSection; 