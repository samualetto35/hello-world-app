import React from 'react';
import './LogoBanner.css';

const LogoBanner = () => {
  // Well-known Turkish companies with logo URLs
  const companies = [
    {
      name: 'Arçelik',
      logo: 'https://logo.clearbit.com/arcelik.com'
    },
    {
      name: 'Turkcell',
      logo: 'https://logo.clearbit.com/turkcell.com.tr'
    },
    {
      name: 'Garanti BBVA',
      logo: 'https://logo.clearbit.com/garantibbva.com.tr'
    },
    {
      name: 'Sabancı',
      logo: 'https://logo.clearbit.com/sabanci.com'
    },
    {
      name: 'Koç Holding',
      logo: 'https://logo.clearbit.com/koc.com.tr'
    },
    {
      name: 'İş Bankası',
      logo: 'https://logo.clearbit.com/isbank.com.tr'
    },
    {
      name: 'Akbank',
      logo: 'https://logo.clearbit.com/akbank.com'
    },
    {
      name: 'Vakıfbank',
      logo: 'https://logo.clearbit.com/vakifbank.com.tr'
    },
    {
      name: 'Turkish Airlines',
      logo: 'https://logo.clearbit.com/turkishairlines.com'
    },
    {
      name: 'Anadolu Grubu',
      logo: 'https://logo.clearbit.com/anadolugrubu.com.tr'
    },
    {
      name: 'Enka',
      logo: 'https://logo.clearbit.com/enka.com'
    },
    {
      name: 'Tüpraş',
      logo: 'https://logo.clearbit.com/tupras.com.tr'
    },
    {
      name: 'Ford Otosan',
      logo: 'https://logo.clearbit.com/fordotosan.com.tr'
    },
    {
      name: 'Migros',
      logo: 'https://logo.clearbit.com/migros.com.tr'
    },
    {
      name: 'BİM',
      logo: 'https://logo.clearbit.com/bim.com.tr'
    },
    {
      name: 'Yapı Kredi',
      logo: 'https://logo.clearbit.com/yapikredi.com.tr'
    }
  ];

  return (
    <div className="logo-banner-section">
      <div className="trusted-heading">
        <h3 className="trusted-title">Trusted by Industry Leaders</h3>
      </div>
      <div className="logo-banner">
        <div className="logo-banner-track">
          {/* First set of logos */}
          <div className="logo-banner-slide">
            {companies.map((company, index) => (
              <div key={index} className="logo-item">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="company-name fallback" style={{display: 'none'}}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="logo-banner-slide">
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="logo-item">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="company-name fallback" style={{display: 'none'}}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBanner; 