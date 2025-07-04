import React, { useState } from 'react';
import './DemoDashboard.css';

const DemoDashboard = ({ onLogout }) => {
  const [selectedMonth, setSelectedMonth] = useState('Ocak');

  // Demo data matching the design
  const successRate = {
    grade: 'A+',
    percentage: '94%',
    lastUpdate: '29 Ocak'
  };

  const interviewSuccess = [
    { day: 'Mon 22', value: 80 },
    { day: 'Tue 23', value: 85 },
    { day: 'Wed 24', value: 90 },
    { day: 'Thu 25', value: 95 },
    { day: 'Fri 26', value: 100 }
  ];

  const upcomingInterviews = [
    { time: '22', day: 'Monday', candidate: 'Ayşe K.', position: 'Frontend' },
    { time: '23', day: 'Tuesday', candidate: 'Mehmet S.', position: 'Backend' },
    { time: '24', day: 'Wednesday', candidate: 'Zehra A.', position: 'UX/UI' },
    { time: '25', day: 'Thursday', candidate: 'Can Y.', position: 'DevOps' },
    { time: '26', day: 'Friday', candidate: 'Elif T.', position: 'Data' }
  ];

  const todayInterviews = [
    { time: '09:00 - 09:45', candidate: 'Ahmet Demir', position: 'Senior Frontend Developer' },
    { time: '10:15 - 11:00', candidate: 'Selin Kaya', position: 'Product Manager' },
    { time: '11:30 - 12:15', candidate: 'Murat Özkan', position: 'Backend Developer' },
    { time: '14:00 - 14:45', candidate: 'Deniz Çelik', position: 'UI/UX Designer' }
  ];

  const teamMembers = [
    { name: 'Ayşe Demir', role: 'HR Manager', status: 'online' },
    { name: 'Mehmet Kaya', role: 'Tech Lead', status: 'online' },
    { name: 'Zehra Öztürk', role: 'Recruitment Specialist', status: 'online' }
  ];

  const recentActivity = [
    { action: 'Yeni Pozisyon Açıldı', description: 'Senior React Developer pozisyonu için mülakat süreci başladı. 25 aday başvurdu.', time: '2 saat önce' }
  ];

  return (
    <div className="demo-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">Recula</span>
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-item active">Dashboard</a>
            <a href="#" className="nav-item">Adaylar</a>
            <a href="#" className="nav-item">Mülakatlar</a>
            <a href="#" className="nav-item">Raporlar</a>
            <a href="#" className="nav-item">Ayarlar</a>
            <a href="#" className="nav-item">Yardım</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="notification-icon">🔔</div>
          <div className="user-menu">
            <span className="user-name">Demo Kullanıcı</span>
            <button onClick={onLogout} className="logout-btn">Log out</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-grid">
          {/* Success Analytics Card */}
          <div className="analytics-card">
            <div className="analytics-header">
              <h2>Recruitment <span className="success-text">Success</span></h2>
              <p>Analytics</p>
              <p className="ai-powered">AI-powered insights</p>
            </div>
            <div className="grade-display">
              <span className="grade-letter">A+</span>
              <span className="grade-percentage">{successRate.percentage}</span>
              <p className="last-update">Son güncelleme: {successRate.lastUpdate}</p>
            </div>
          </div>

          {/* Interview Success Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>Mülakat Başarı Oranı</h3>
              <div className="chart-controls">
                <span>Önceki hafta</span>
                <span>Önceki ay</span>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                  <option value="Ocak">Ocak</option>
                  <option value="Şubat">Şubat</option>
                  <option value="Mart">Mart</option>
                </select>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart-y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
              <div className="chart-bars">
                {interviewSuccess.map((item, index) => (
                  <div key={index} className="bar-container">
                    <div 
                      className="chart-bar" 
                      style={{ height: `${item.value}%` }}
                    ></div>
                    <span className="bar-label">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="team-card">
            <div className="team-header">
              <h3>Takım Üyeleri</h3>
              <p>Aktif ekip üyelerini görebilirsiniz.</p>
            </div>
            <div className="team-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-avatar">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                  <div className={`status-indicator ${member.status}`}></div>
                </div>
              ))}
            </div>
            <button className="show-all-btn">Tümünü göster</button>
          </div>

          {/* Upcoming Interviews Calendar */}
          <div className="calendar-card">
            <h3>Yaklaşan Mülakatlar</h3>
            <div className="interview-calendar">
              {upcomingInterviews.map((interview, index) => (
                <div key={index} className="calendar-day">
                  <div className="day-number">{interview.time}</div>
                  <div className="day-name">{interview.day}</div>
                  <div className="day-candidate">{interview.candidate}</div>
                  <div className="day-position">{interview.position}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Interviews */}
          <div className="today-interviews-card">
            <div className="today-header">
              <h3>Bugünün Mülakatları</h3>
              <button className="today-btn">+ Mülakat Günü</button>
            </div>
            <div className="today-list">
              {todayInterviews.map((interview, index) => (
                <div key={index} className="today-interview">
                  <div className="interview-time">{interview.time}</div>
                  <div className="interview-details">
                    <h4>{interview.candidate}</h4>
                    <p>{interview.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="activity-card">
            <div className="activity-header">
              <h3>Son Aktiviteler</h3>
              <button className="activity-btn">Tümünü göster</button>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">📝</div>
                  <div className="activity-content">
                    <h4>{activity.action}</h4>
                    <p>{activity.description}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoDashboard; 