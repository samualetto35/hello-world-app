import React from 'react';
import './CalendarWidget.css';

const CalendarWidget = () => {
  const calendarDays = [
    { date: 22, day: 'Monday', isToday: false },
    { date: 23, day: 'Tuesday', isToday: true },
    { date: 24, day: 'Wednesday', isToday: false },
    { date: 25, day: 'Thursday', isToday: false },
    { date: 26, day: 'Friday', isToday: false }
  ];

  return (
    <div className="calendar-widget">
      <h3 className="calendar-title">Calendar</h3>
      
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div 
            key={index} 
            className={`calendar-day ${day.isToday ? 'today' : ''}`}
          >
            <div className="date-number">{day.date}</div>
            <div className="day-name">{day.day}</div>
          </div>
        ))}
      </div>
      
      <div className="calendar-note">
        <div className="note-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="note-text">
          <div>Hiç tanıtısı bir day new</div>
          <div className="note-action">+ Açıklayıcılık</div>
        </div>
      </div>
      
      <div className="expand-action">
        <span>Expand</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="calendar-bottom">
        <div className="additional-action">
          <span>+ Add new Job Folder</span>
        </div>
        
        <div className="show-all-calendar">
          <span>Show all</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget; 