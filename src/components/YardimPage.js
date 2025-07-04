import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPages.css';

const YardimPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const faqItems = [
    {
      id: 1,
      question: 'Mülakat süreci nasıl çalışır?',
      answer: 'AI destekli mülakat sistemimiz, adayları otomatik olarak değerlendirir ve size detaylı raporlar sunar.'
    },
    {
      id: 2,
      question: 'Aday değerlendirme kriterleri nelerdir?',
      answer: 'Teknik yetkinlik, iletişim becerileri, problem çözme yetisi ve kurumsal uyum gibi faktörleri değerlendiriyoruz.'
    },
    {
      id: 3,
      question: 'Raporları nasıl özelleştirebilirim?',
      answer: 'Raporlar bölümünden farklı filtreler ve kriteler kullanarak özel raporlar oluşturabilirsiniz.'
    },
    {
      id: 4,
      question: 'Sistem güvenliği nasıl sağlanıyor?',
      answer: 'Tüm verileriniz şifrelenir ve güvenli sunucularda saklanır. GDPR uyumlu altyapımız vardır.'
    }
  ];

  const supportOptions = [
    {
      title: 'Canlı Destek',
      description: 'Uzmanlarımızla hemen iletişime geçin',
      icon: '💬',
      action: 'Sohbet Başlat'
    },
    {
      title: 'E-posta Desteği',
      description: 'Detaylı sorularınız için e-posta gönderin',
      icon: '📧',
      action: 'E-posta Gönder'
    },
    {
      title: 'Video Rehberleri',
      description: 'Adım adım video eğitimlerini izleyin',
      icon: '🎥',
      action: 'Rehberleri İzle'
    },
    {
      title: 'Dokümantasyon',
      description: 'Detaylı kullanım kılavuzunu inceleyin',
      icon: '📚',
      action: 'Dökümanları Görüntüle'
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <a href="/ayarlar" className="nav-item">Ayarlar</a>
            <a href="/yardim" className="nav-item active">Yardım</a>
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
          <h1>Yardım Merkezi</h1>
          <p>Size nasıl yardımcı olabiliriz?</p>
        </div>
        
        <div className="page-content">
          {/* Search Box */}
          <div className="help-search">
            <input
              type="text"
              placeholder="Aradığınız konuyu yazın..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Support Options */}
          <div className="support-options">
            <h2>Destek Seçenekleri</h2>
            <div className="support-grid">
              {supportOptions.map((option, index) => (
                <div key={index} className="support-card">
                  <div className="support-icon">{option.icon}</div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <button className="support-action-btn">{option.action}</button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Sık Sorulan Sorular</h2>
            <div className="faq-list">
              {filteredFAQ.map(item => (
                <div key={item.id} className="faq-item">
                  <details>
                    <summary className="faq-question">
                      {item.question}
                    </summary>
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h2>Hızlı Linkler</h2>
            <div className="links-grid">
              <a href="#" className="quick-link">
                <span className="link-icon">🚀</span>
                <span className="link-text">Hızlı Başlangıç</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">⚙️</span>
                <span className="link-text">Sistem Gereksinimleri</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">🔧</span>
                <span className="link-text">Sorun Giderme</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">📞</span>
                <span className="link-text">İletişim</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YardimPage; 