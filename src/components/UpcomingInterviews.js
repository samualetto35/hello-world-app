import React from 'react';
import './UpcomingInterviews.css';

const UpcomingInterviews = () => {
  const interviews = [
    {
      name: 'Ali Uçan',
      email: 'ali.ucan@example.com',
      time: '14:45 06 6 Temmuz Paz',
      position: 'Pazarlama Sağlam - Senior'
    },
    {
      name: 'Ayşe Arıcı',
      email: 'ayse.arici@example.com',
      time: '15:00 06 6 Temmuz Paz',
      position: 'Pazarlama Sağlam - Senior'
    },
    {
      name: 'Esra Bilge',
      email: 'esra.bilge@example.com',
      time: '16:15 06 6 Temmuz Paz',
      position: 'Pazarlama Sağlam - Senior'
    },
    {
      name: 'Ahmet Eser',
      email: 'ahmet.eser@example.com',
      time: '16:45 06 6 Temmuz Paz',
      position: 'Pazarlama Sağlam - Senior'
    }
  ];

  return (
    <div className="upcoming-interviews">
      <h3 className="interviews-title">Upcoming Interviews</h3>
      
      <div className="interviews-list">
        {interviews.map((interview, index) => (
          <div key={index} className="interview-item">
            <div className="interview-info">
              <div className="interview-name">{interview.name}</div>
              <div className="interview-email">{interview.email}</div>
            </div>
            
            <div className="interview-details">
              <div className="interview-time">{interview.time}</div>
              <div className="interview-position">{interview.position}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="show-all-interviews">
        <span>Show all</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default UpcomingInterviews; 