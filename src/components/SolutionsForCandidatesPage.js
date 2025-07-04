import React, { useEffect } from 'react';
import './SolutionsForCandidatesPage.css';
import Header from './Header';
import Footer from './Footer';

const SolutionsForCandidatesPage = ({ onLoginClick }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: 'AI-Powered Practice',
      description: 'Practice interviews with AI to improve your skills and confidence.',
      details: 'Get instant feedback on your performance, identify areas for improvement, and practice as many times as you need. Build confidence for real interviews.',
      icon: '🤖'
    },
    {
      title: 'Fair Evaluation',
      description: 'Experience bias-free interviews that focus on your actual skills.',
      details: 'Our AI evaluates you based on your abilities, not demographics. Every candidate gets the same fair assessment process.',
      icon: '📈'
    },
    {
      title: 'Instant Feedback',
      description: 'Receive detailed feedback immediately after your interview.',
      details: 'Know exactly how you performed with comprehensive analysis of your technical skills, communication, and overall presentation.',
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
      number: '3x',
      label: 'Better Interview Performance'
    },
    {
      number: '89%',
      label: 'Candidate Satisfaction Rate'
    },
    {
      number: '150+',
      label: 'Practice Sessions Available'
    },
    {
      number: '95%',
      label: 'Skill Improvement Rate'
    }
  ];

  const useCases = [
    {
      title: 'For Students',
      description: 'Prepare for your first job interviews',
      details: 'Perfect for university students and recent graduates. Practice common interview questions and build confidence before applying to companies.',
      features: [
        'University interview prep',
        'Industry-specific practice',
        'Real-time feedback',
        'Build interview confidence'
      ]
    },
    {
      title: 'For Job Seekers',
      description: 'Improve your interview skills and land better jobs',
      details: 'Enhance your interview performance with AI-powered practice sessions. Get insights into your strengths and areas for improvement.',
      features: [
        'Skill-based practice',
        'Performance analytics',
        'Interview technique improvement',
        'Competitive advantage'
      ]
    },
    {
      title: 'For Career Changers',
      description: 'Transition to new industries with confidence',
      details: 'Switching careers? Practice interviews for your target industry and understand what employers are looking for in your new field.',
      features: [
        'Industry transition support',
        'Skill gap identification',
        'Targeted interview prep',
        'Career guidance'
      ]
    }
  ];

  return (
    <div className="solutions-page">
      <Header onLoginClick={onLoginClick} />
      
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <div className="solutions-hero-badge">Solutions for Candidates</div>
          <h1 className="solutions-hero-title">
            Practice and excel.<br />
            <span className="hero-accent">Get hired.</span>
          </h1>
          <p className="solutions-hero-subtitle">
            AI-powered interview practice platform<br />
            where candidates improve and succeed.
          </p>
          <button className="solutions-cta-button">Start practicing</button>
          
          {/* Trusted by section */}
          <div className="trusted-section">
            <p className="trusted-text">Candidates from these companies have used Recula</p>
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
          <h2 className="content-title">AI-powered interview practice</h2>
          
          {/* Mobile Contact Us Button */}
          <div className="mobile-contact-button-container">
            <button className="mobile-contact-button">Get Started</button>
          </div>
          
          <div className="content-sections">
            <div className="content-section">
              <h3>Practice makes perfect</h3>
              <p>The more you practice with our AI, the better you get. Real interview scenarios with instant feedback help you improve quickly.</p>
            </div>
            <div className="content-section">
              <h3>Fair and unbiased evaluation</h3>
              <p>Our AI focuses on your skills and performance, giving you a fair chance to showcase your abilities without any bias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases-section">
        <div className="solutions-container">
          <h2 className="use-cases-title">Solutions for every career stage</h2>
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

export default SolutionsForCandidatesPage; 