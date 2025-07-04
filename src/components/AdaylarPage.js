import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPages.css';

const AdaylarPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const candidates = [
    { 
      id: 1, 
      name: 'Ahmet Demir', 
      position: 'Senior Frontend Developer', 
      status: 'Mülakat Bekliyor',
      score: 'A+',
      date: '29 Ocak 2024'
    },
    { 
      id: 2, 
      name: 'Selin Kaya', 
      position: 'Product Manager', 
      status: 'Değerlendirme',
      score: 'A',
      date: '28 Ocak 2024'
    },
    { 
      id: 3, 
      name: 'Murat Özkan', 
      position: 'Backend Developer', 
      status: 'Onaylandı',
      score: 'B+',
      date: '27 Ocak 2024'
    },
    { 
      id: 4, 
      name: 'Deniz Çelik', 
      position: 'UI/UX Designer', 
      status: 'Mülakat Bekliyor',
      score: 'A-',
      date: '26 Ocak 2024'
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
            <a href="/adaylar" className="nav-item active">Adaylar</a>
            <a href="/mulakatlar" className="nav-item">Mülakatlar</a>
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
          <h1>Adaylar</h1>
          <p>Tüm aday başvurularını yönetebilirsiniz.</p>
        </div>
        
        <div className="page-content">
          <div className="candidates-card">
            <div className="card-header">
              <h2>Aday Listesi</h2>
              <button className="add-btn">+ Yeni Aday</button>
            </div>
            
            <div className="candidates-table">
              <div className="table-header">
                <span>Aday</span>
                <span>Pozisyon</span>
                <span>Durum</span>
                <span>Puan</span>
                <span>Tarih</span>
                <span>İşlemler</span>
              </div>
              
              {candidates.map(candidate => (
                <div key={candidate.id} className="table-row">
                  <div className="candidate-info">
                    <div className="candidate-avatar">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="candidate-name">{candidate.name}</span>
                  </div>
                  <span className="candidate-position">{candidate.position}</span>
                  <span className={`candidate-status status-${candidate.status.toLowerCase().replace(' ', '-')}`}>
                    {candidate.status}
                  </span>
                  <span className={`candidate-score score-${candidate.score.replace('+', '-plus').replace('-', '-minus')}`}>
                    {candidate.score}
                  </span>
                  <span className="candidate-date">{candidate.date}</span>
                  <div className="candidate-actions">
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

export default AdaylarPage; 