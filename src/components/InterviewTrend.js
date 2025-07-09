import React from 'react';
import './InterviewTrend.css';

const InterviewTrend = () => {
  const data = [
    { day: 'Mon 1', value: 60, label: 'Completed Interviews' },
    { day: 'Tue 2', value: 80, label: 'Completed Interviews' },
    { day: 'Wed 3', value: 100, label: 'Completed Interviews' },
    { day: 'Thu 4', value: 75, label: 'Completed Interviews' },
    { day: 'Fri 5', value: 90, label: 'Completed Interviews' },
  ];

  return (
    <div className="interview-trend">
      <h3 className="trend-title">Interview Trend</h3>
      
      <div className="chart-container">
        <div className="y-axis">
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        
        <div className="bars-container">
          {data.map((item, index) => (
            <div key={index} className="bar-group">
              <div className="bar-wrapper">
                <div 
                  className="bar completed" 
                  style={{ height: `${item.value}%` }}
                ></div>
              </div>
              <span className="day-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color completed"></div>
          <span>Completed Interviews</span>
        </div>
        <div className="legend-item">
          <div className="legend-color cancelled"></div>
          <span>Cancelled Interviews</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewTrend; 