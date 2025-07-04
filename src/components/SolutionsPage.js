import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';
import Header from './Header';
import Footer from './Footer';

const SolutionsPage = ({ onLoginClick }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: 'AI-Powered Screening',
      description: 'Free up your HR team to focus on strategic work while AI handles initial screening.',
      details: 'Save 95% of screening time and reduce hiring costs by 60%. Our AI evaluates technical skills, communication, and cultural fit through video interviews, allowing HR to focus on final candidate selection and employee development.',
      icon: '🤖'
    },
    {
      title: 'Scalable Hiring',
      description: 'Access a larger talent pool and handle high-volume recruitment effortlessly.',
      details: 'Process hundreds of candidates simultaneously while maintaining consistent evaluation standards. Reach beyond traditional CVs to discover hidden talent and culture-fit candidates your competitors miss.',
      icon: '📈'
    },
    {
      title: 'Smart Analytics',
      description: 'Boost HR team efficiency with data-driven insights and automated reporting.',
      details: 'Identify hiring bottlenecks, optimize your recruitment strategy, and generate detailed candidate feedback automatically. Enhance communication with candidates while reducing administrative workload by 80%.',
      icon: '📊'
    }
  ];

  const companies = [
    { name: 'Turkcell', logo: 'https://logo.clearbit.com/turkcell.com.tr' },
    { name: 'Garanti BBVA', logo: 'https://logo.clearbit.com/garanti.com.tr' },
    { name: 'Turkish Airlines', logo: 'https://logo.clearbit.com/turkishairlines.com' },
    { name: 'Akbank', logo: 'https://logo.clearbit.com/akbank.com' },
    { name: 'Sabanci', logo: 'https://logo.clearbit.com/sabanci.com' },
    { name: 'Koç Holding', logo: 'https://logo.clearbit.com/koc.com.tr' }
  ];

  const stats = [
    {
      number: '4x',
      label: 'More Candidates Screened'
    },
    {
      number: '84%',
      label: 'Human Alignment Score'
    },
    {
      number: '220+',
      label: 'Hours Saved per 100 Candidates'
    },
    {
      number: '92%',
      label: 'Candidate Completion Rate'
    }
  ];

  const useCases = [
    {
      title: 'For Startups',
      description: 'Scale your hiring without hiring HR staff',
      details: 'Perfect for early-stage companies that need to hire quickly but don\'t have dedicated recruiters. Our AI handles the entire screening process.',
      features: [
        'No HR team required',
        'Cost-effective screening',
        'Quick candidate evaluation',
        'Focus on building your product'
      ]
    },
    {
      title: 'For Scale-ups',
      description: 'Handle rapid growth with consistent quality',
      details: 'Maintain hiring standards while scaling fast. Our platform ensures every candidate gets the same high-quality evaluation experience.',
      features: [
        'High-volume processing',
        'Consistent evaluation standards',
        'Team collaboration tools',
        'Advanced analytics'
      ]
    },
    {
      title: 'For Enterprises',
      description: 'Custom solutions for complex hiring needs',
      details: 'White-label solutions, custom integrations, and enterprise-grade security for large organizations with specific requirements.',
      features: [
        'White-label branding',
        'Custom integrations',
        'Enterprise security',
        'Dedicated support'
      ]
    }
  ];

  return (
    <div className="solutions-page">
      <Header onLoginClick={onLoginClick} />
      
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <div className="solutions-hero-badge">Solutions for Business</div>
          <h1 className="solutions-hero-title">
            Hiring and talent.<br />
            <span className="hero-accent">Connected.</span>
          </h1>
          <p className="solutions-hero-subtitle">
            One intelligent AI platform where companies<br />
            screen, evaluate, and hire faster together.
          </p>
          <Link to="/contact" className="solutions-cta-button">Request a demo</Link>
          
          {/* Trusted by section */}
          <div className="trusted-section">
            <p className="trusted-text">Trusted by 90% of Fortune 500 companies in Turkey</p>
            <div className="trusted-companies">
              {companies.map((company, index) => (
                <div key={index} className="trusted-company">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="company-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="company-name" style={{display: 'none'}}>
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="solutions-container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <p className="solution-details">{solution.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="solutions-stats-section">
        <div className="solutions-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="solutions-main-content">
        <div className="solutions-container">
          <h2 className="content-title">All-in-one AI, right where you hire</h2>
          
          {/* Mobile Contact Us Button */}
          <div className="mobile-contact-button-container">
            <button className="mobile-contact-button">Contact Us</button>
          </div>
          
          <div className="content-sections">
            <div className="content-section">
              <h3>AI with all the right context</h3>
              <p>Not just another generic AI tool—it's AI powered by your company's hiring needs and workflows.</p>
            </div>
            <div className="content-section">
              <h3>One AI tool for everything</h3>
              <p>Screen, evaluate, analyze, and hire candidates, all in Recula. No need for multiple HR point solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases-section">
        <div className="solutions-container">
          <h2 className="use-cases-title">Solutions for every company size</h2>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card">
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
                <p className="use-case-details">{useCase.details}</p>
                <ul className="use-case-features">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage; 