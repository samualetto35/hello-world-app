import React, { useState } from 'react';
import './DemoDashboard.css';

const DemoDashboard = ({ onLogout }) => {
  const [selectedMonth, setSelectedMonth] = useState('Ocak');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  // Demo data matching the exact design
  const successRate = {
    grade: 'A+',
    percentage: '94%',
    lastUpdate: '29 Ocak'
  };

  const interviewSuccess = [
    { day: 'Mon 22', value: 80, height: '80%' },
    { day: 'Tue 23', value: 85, height: '85%' },
    { day: 'Wed 24', value: 95, height: '95%' },
    { day: 'Thu 25', value: 90, height: '90%' },
    { day: 'Fri 26', value: 100, height: '100%' }
  ];

  const upcomingInterviews = [
    { date: '22', day: 'Monday', candidate: 'Ayşe K.', position: 'Frontend' },
    { date: '23', day: 'Tuesday', candidate: 'Mehmet S.', position: 'Backend' },
    { date: '24', day: 'Wednesday', candidate: 'Zehra A.', position: 'UX/UI' },
    { date: '25', day: 'Thursday', candidate: 'Can Y.', position: 'DevOps' },
    { date: '26', day: 'Friday', candidate: 'Elif T.', position: 'Data Sci' }
  ];

  const todayInterviews = [
    { time: '09:00 - 09:45', candidate: 'Ahmet Demir', position: 'Senior Frontend Developer' },
    { time: '10:15 - 11:00', candidate: 'Selin Kaya', position: 'Product Manager' },
    { time: '11:30 - 12:15', candidate: 'Murat Özkan', position: 'Backend Developer' },
    { time: '14:00 - 14:45', candidate: 'Deniz Çelik', position: 'UI/UX Designer' }
  ];

  const teamMembers = [
    { name: 'Ayşe Demir', role: 'HR Manager', status: 'online', avatar: '👩‍💼' },
    { name: 'Mehmet Kaya', role: 'Head Hunter', status: 'online', avatar: '👨‍💻' },
    { name: 'Zehra Öztürk', role: 'Recruitment Specialist', status: 'online', avatar: '👩‍💻' }
  ];

  const recentActivity = [
    { 
      action: 'Yeni Pozisyon Açıldı', 
      description: 'Senior React Developer pozisyonu için mülakat süreci başladı. 25 aday başvurdu.',
      time: '2 saat önce',
      icon: '📝'
    }
  ];

  const NotificationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  );

  const HamburgerIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="demo-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <img src="/output-onlinepngtools-2.png" alt="Recula Logo" className="logo-image" />
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
          <div className="notification-icon">
            <NotificationIcon />
          </div>
          <div className="user-menu" onClick={() => setShowUserDropdown(!showUserDropdown)}>
            <div className="user-icon">
              <UserIcon />
            </div>
            <span className="user-name">Demo Kullanıcı</span>
            <div className="chevron-icon">
              <ChevronDownIcon />
            </div>
            {showUserDropdown && (
              <div className="user-dropdown">
                <a href="#" className="dropdown-item">Adaylar</a>
                <a href="#" className="dropdown-item">Mülakatlar</a>
                <a href="#" className="dropdown-item">Raporlar</a>
                <a href="#" className="dropdown-item">Ayarlar</a>
                <a href="#" className="dropdown-item">Yardım</a>
              </div>
            )}
          </div>
          <button onClick={onLogout} className="logout-btn">Log out</button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        <div className="mobile-nav-main">
          <a 
            href="#" 
            className={`mobile-nav-item ${activeNavItem === 'Dashboard' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Dashboard'); }}
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className={`mobile-nav-item ${activeNavItem === 'Adaylar' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Adaylar'); }}
          >
            Adaylar
          </a>
          <a 
            href="#" 
            className={`mobile-nav-item ${activeNavItem === 'Mülakatlar' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Mülakatlar'); }}
          >
            Mülakatlar
          </a>
          <a 
            href="#" 
            className={`mobile-nav-item ${activeNavItem === 'Raporlar' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavItemClick('Raporlar'); }}
          >
            Raporlar
          </a>
          <button className="hamburger-btn" onClick={handleMobileMenuToggle}>
            <HamburgerIcon />
          </button>
        </div>
        {showMobileMenu && (
          <div className="mobile-dropdown">
            <a 
              href="#" 
              className={`mobile-dropdown-item ${activeNavItem === 'Ayarlar' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavItemClick('Ayarlar'); setShowMobileMenu(false); }}
            >
              Ayarlar
            </a>
            <a 
              href="#" 
              className={`mobile-dropdown-item ${activeNavItem === 'Yardım' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavItemClick('Yardım'); setShowMobileMenu(false); }}
            >
              Yardım
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-grid">
          {/* Success Analytics Card */}
          <div className="analytics-card">
            <div className="analytics-header">
              <h2>Recruitment <span className="success-text">Success</span></h2>
              <p className="analytics-subtitle">Analytics</p>
              <p className="ai-powered">AI-powered insights</p>
            </div>
            <div className="grade-display">
              <div className="grade-section">
                <span className="grade-letter">A+</span>
                <span className="grade-percentage">{successRate.percentage}</span>
              </div>
              <p className="last-update">Son güncelleme: {successRate.lastUpdate}</p>
            </div>
          </div>

          {/* Interview Success Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>Mülakat Başarı Oranı</h3>
              <div className="chart-controls">
                <span className="control-item">Önceki hafta</span>
                <span className="control-item">Önceki ay</span>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="month-select">
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
                      style={{ height: item.height }}
                      data-value={item.value}
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
              <p className="team-subtitle">Aktif ekip üyelerini görebilirsiniz.</p>
            </div>
            <div className="team-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-avatar">
                    <span className="avatar-emoji">{member.avatar}</span>
                    <div className={`status-dot ${member.status}`}></div>
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="show-all-btn">Tümünü göster</button>
          </div>

          {/* Upcoming Interviews Calendar */}
          <div className="calendar-card">
            <div className="calendar-header">
              <h3>Yaklaşan Mülakatlar</h3>
              <button className="calendar-btn">+ Mülakat Günü</button>
            </div>
            <div className="interview-calendar">
              <div className="calendar-grid">
                {upcomingInterviews.map((interview, index) => (
                  <div key={index} className="calendar-day">
                    <div className="day-number">{interview.date}</div>
                    <div className="day-name">{interview.day}</div>
                    <div className="interview-info">
                      <div className="candidate-name">{interview.candidate}</div>
                      <div className="candidate-position">{interview.position}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Interviews */}
          <div className="today-interviews-card">
            <div className="today-header">
              <h3>Bugünün Mülakatları</h3>
            </div>
            <div className="today-list">
              {todayInterviews.map((interview, index) => (
                <div key={index} className="today-interview">
                  <div className="interview-time">{interview.time}</div>
                  <div className="interview-details">
                    <h4 className="candidate-name">{interview.candidate}</h4>
                    <p className="position-title">{interview.position}</p>
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
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <h4 className="activity-title">{activity.action}</h4>
                    <p className="activity-description">{activity.description}</p>
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