import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPages.css';

const RaporlarPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const reports = [
    { 
      id: 1, 
      title: 'Aylık İşe Alım Raporu', 
      type: 'İstatistik',
      period: 'Ocak 2024',
      status: 'Hazır',
      createdDate: '29 Ocak 2024'
    },
    { 
      id: 2, 
      title: 'Aday Performans Analizi', 
      type: 'Analiz',
      period: 'Son 30 Gün',
      status: 'Hazırlanıyor',
      createdDate: '28 Ocak 2024'
    },
    { 
      id: 3, 
      title: 'Mülakat Başarı Oranları', 
      type: 'İstatistik',
      period: 'Q1 2024',
      status: 'Hazır',
      createdDate: '25 Ocak 2024'
    },
    { 
      id: 4, 
      title: 'Departman Bazlı İşe Alım', 
      type: 'Özet',
      period: 'Yıllık',
      status: 'Taslak',
      createdDate: '20 Ocak 2024'
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
            <a href="/mulakatlar" className="nav-item">Mülakatlar</a>
            <a href="/raporlar" className="nav-item active">Raporlar</a>
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
          <h1>Raporlar</h1>
          <p>Detaylı analiz ve raporlarınızı görüntüleyebilirsiniz.</p>
        </div>
        
        <div className="page-content">
          <div className="reports-card">
            <div className="card-header">
              <h2>Rapor Listesi</h2>
              <button className="add-btn">+ Yeni Rapor</button>
            </div>
            
            <div className="reports-table">
              <div className="table-header">
                <span>Rapor Adı</span>
                <span>Tür</span>
                <span>Dönem</span>
                <span>Durum</span>
                <span>Oluşturma Tarihi</span>
                <span>İşlemler</span>
              </div>
              
              {reports.map(report => (
                <div key={report.id} className="table-row">
                  <div className="report-info">
                    <div className="report-icon">📊</div>
                    <span className="report-title">{report.title}</span>
                  </div>
                  <span className="report-type">{report.type}</span>
                  <span className="report-period">{report.period}</span>
                  <span className={`report-status status-${report.status.toLowerCase().replace(' ', '-')}`}>
                    {report.status}
                  </span>
                  <span className="report-date">{report.createdDate}</span>
                  <div className="report-actions">
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn download">📥</button>
                    <button className="action-btn share">📤</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <h3>Bu Ay</h3>
                <p className="stat-number">45</p>
                <p className="stat-label">Başvuru</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>Başarılı</h3>
                <p className="stat-number">12</p>
                <p className="stat-label">İşe Alım</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <h3>Ortalama</h3>
                <p className="stat-number">7</p>
                <p className="stat-label">Gün Süre</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RaporlarPage; 