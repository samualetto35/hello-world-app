import React from 'react';
import './DemoDashboard.css';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import PerformanceCard from './PerformanceCard';
import InterviewTrend from './InterviewTrend';
import TopPerformers from './TopPerformers';
import CalendarWidget from './CalendarWidget';
import UpcomingInterviews from './UpcomingInterviews';
import AnalyticsSection from './AnalyticsSection';
import BottomSection from './BottomSection';

const DemoDashboard = ({ onLogout }) => {
  return (
    <div className="demo-dashboard">
      <DesktopHeader onLogout={onLogout} />
      <MobileHeader onLogout={onLogout} />
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="top-row">
            <div className="grid-item">
              <PerformanceCard />
            </div>
            <div className="grid-item">
              <InterviewTrend />
            </div>
            <div className="grid-item">
              <TopPerformers />
            </div>
          </div>
          
          <div className="middle-row">
            <div className="grid-item">
              <CalendarWidget />
            </div>
            <div className="grid-item">
              <UpcomingInterviews />
            </div>
            <div className="grid-item">
              <AnalyticsSection />
            </div>
          </div>
        </div>
        
        <BottomSection />
        
        <div className="dashboard-footer">
          <span>© 2025 Recula Inc.</span>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#support">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard; 