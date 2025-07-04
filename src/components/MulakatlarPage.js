import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPages.css';

const MulakatlarPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const interviews = [
    { 
      id: 1, 
      candidate: 'Ahmet Demir', 
      position: 'Senior Frontend Developer', 
      interviewer: 'Mehmet Kaya',
      time: '09:00 - 09:45',
      date: '29 Ocak 2024',
      status: 'Tamamlandı',
      score: 'A+'
    },
    { 
      id: 2, 
      candidate: 'Selin Kaya', 
      position: 'Product Manager', 
      interviewer: 'Ayşe Demir',
      time: '10:15 - 11:00',
      date: '29 Ocak 2024',
      status: 'Devam Ediyor',
      score: '-'
    },
    { 
      id: 3, 
      candidate: 'Murat Özkan', 
      position: 'Backend Developer', 
      interviewer: 'Zehra Öztürk',
      time: '11:30 - 12:15',
      date: '29 Ocak 2024',
      status: 'Planlandı',
      score: '-'
    },
    { 
      id: 4, 
      candidate: 'Deniz Çelik', 
      position: 'UI/UX Designer', 
      interviewer: 'Mehmet Kaya',
      time: '14:00 - 14:45',
      date: '29 Ocak 2024',
      status: 'Planlandı',
      score: '-'
    }
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">Recula</span>
          </div>
          <nav className="nav-menu">
            <a href="/dashboard" className="nav-item">Dashboard</a>
            <a href="/adaylar" className="nav-item">Adaylar</a>
            <a href="/mulakatlar" className="nav-item active">Mülakatlar</a>
            <a href="/raporlar" className="nav-item">Raporlar</a>
            <a href="/ayarlar" className="nav-item">Ayarlar</a>
            <a href="/yardim" className="nav-item">Yardım</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="notification-icon">🔔</div>
          <div className="user-menu">
            <span className="user-name">Demo Kullanıcı</span>
            <button onClick={handleLogout} className="logout-btn">
              <span className="logout-icon">🚪</span>
              Log out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="page-header">
          <h1>Mülakatlar</h1>
          <p>Tüm mülakat planlarını yönetebilirsiniz.</p>
        </div>
        
        <div className="page-content">
          <div className="interviews-card">
            <div className="card-header">
              <h2>Mülakat Listesi</h2>
              <button className="add-btn">+ Yeni Mülakat</button>
            </div>
            
            <div className="interviews-table">
              <div className="table-header">
                <span>Aday</span>
                <span>Pozisyon</span>
                <span>Mülakatçı</span>
                <span>Saat</span>
                <span>Tarih</span>
                <span>Durum</span>
                <span>Puan</span>
                <span>İşlemler</span>
              </div>
              
              {interviews.map(interview => (
                <div key={interview.id} className="table-row">
                  <div className="candidate-info">
                    <div className="candidate-avatar">
                      {interview.candidate.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="candidate-name">{interview.candidate}</span>
                  </div>
                  <span className="candidate-position">{interview.position}</span>
                  <span className="interviewer-name">{interview.interviewer}</span>
                  <span className="interview-time">{interview.time}</span>
                  <span className="interview-date">{interview.date}</span>
                  <span className={`interview-status status-${interview.status.toLowerCase().replace(' ', '-')}`}>
                    {interview.status}
                  </span>
                  <span className={`interview-score ${interview.score !== '-' ? 'score-' + interview.score.replace('+', '-plus').replace('-', '-minus') : 'score-pending'}`}>
                    {interview.score}
                  </span>
                  <div className="interview-actions">
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
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

export default MulakatlarPage; 