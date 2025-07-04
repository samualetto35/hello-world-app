import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPages.css';

const AyarlarPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    navigate('/');
  };

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
            <a href="/raporlar" className="nav-item">Raporlar</a>
            <a href="/ayarlar" className="nav-item active">Ayarlar</a>
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
          <h1>Ayarlar</h1>
          <p>Hesap ve sistem ayarlarınızı yönetebilirsiniz.</p>
        </div>
        
        <div className="page-content">
          <div className="settings-container">
            {/* Settings Tabs */}
            <div className="settings-tabs">
              <button 
                className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                👤 Profil
              </button>
              <button 
                className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                🔔 Bildirimler
              </button>
              <button 
                className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                🔒 Güvenlik
              </button>
              <button 
                className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
              >
                ⚙️ Tercihler
              </button>
            </div>

            {/* Settings Content */}
            <div className="settings-content">
              {activeTab === 'profile' && (
                <div className="settings-section">
                  <h2>Profil Ayarları</h2>
                  <div className="form-group">
                    <label>Ad Soyad</label>
                    <input type="text" defaultValue="Demo Kullanıcı" />
                  </div>
                  <div className="form-group">
                    <label>E-posta</label>
                    <input type="email" defaultValue="demo@recula.com" />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input type="tel" defaultValue="+90 555 123 4567" />
                  </div>
                  <div className="form-group">
                    <label>Pozisyon</label>
                    <input type="text" defaultValue="HR Manager" />
                  </div>
                  <button className="save-btn">Değişiklikleri Kaydet</button>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="settings-section">
                  <h2>Bildirim Ayarları</h2>
                  <div className="notification-settings">
                    <div className="notification-item">
                      <span>E-posta Bildirimleri</span>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="notification-item">
                      <span>Yeni Aday Bildirimleri</span>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="notification-item">
                      <span>Mülakat Hatırlatmaları</span>
                      <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="notification-item">
                      <span>Haftalık Raporlar</span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="settings-section">
                  <h2>Güvenlik Ayarları</h2>
                  <div className="form-group">
                    <label>Mevcut Şifre</label>
                    <input type="password" placeholder="Mevcut şifrenizi girin" />
                  </div>
                  <div className="form-group">
                    <label>Yeni Şifre</label>
                    <input type="password" placeholder="Yeni şifrenizi girin" />
                  </div>
                  <div className="form-group">
                    <label>Yeni Şifre Tekrar</label>
                    <input type="password" placeholder="Yeni şifrenizi tekrar girin" />
                  </div>
                  <button className="save-btn">Şifreyi Güncelle</button>
                  
                  <div className="security-info">
                    <h3>İki Faktörlü Doğrulama</h3>
                    <p>Hesabınızın güvenliğini artırmak için iki faktörlü doğrulamayı etkinleştirin.</p>
                    <button className="enable-btn">Etkinleştir</button>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="settings-section">
                  <h2>Tercihler</h2>
                  <div className="form-group">
                    <label>Dil</label>
                    <select defaultValue="tr">
                      <option value="tr">Türkçe</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Zaman Dilimi</label>
                    <select defaultValue="europe/istanbul">
                      <option value="europe/istanbul">İstanbul (GMT+3)</option>
                      <option value="europe/london">London (GMT+0)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tema</label>
                    <select defaultValue="light">
                      <option value="light">Açık</option>
                      <option value="dark">Koyu</option>
                      <option value="auto">Otomatik</option>
                    </select>
                  </div>
                  <button className="save-btn">Tercihleri Kaydet</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AyarlarPage; 