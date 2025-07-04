import React, { useEffect, useState } from 'react';
import './PricingPage.css';
import Header from './Header';
import Footer from './Footer';

const PricingPage = ({ onLoginClick }) => {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: 'Essential',
      monthlyPrice: '$300',
      yearlyPrice: '$250',
      period: 'per month + VAT',
      description: 'Perfect for startups and small companies with limited or no HR staff. Automates the entire initial screening process, allowing founders and team leads to focus on building their product while still hiring the right talent efficiently.',
      features: [
        '67 video interviews/month (800/year)',
        'AI-powered candidate screening',
        'Basic interview reports',
        'Email support',
        'Additional interviews: $4.00 each'
      ],
      buttonText: 'Get started',
      buttonClass: 'pricing-button-secondary',
      popular: false
    },
    {
      name: 'Plus',
      monthlyPrice: '$1,200',
      yearlyPrice: '$1,000',
      period: 'per month + VAT',
      description: 'Ideal for scale-ups and mid-size companies with high hiring volumes. Handles 40-50 interviews daily, freeing your HR team to focus on candidate experience, onboarding, and team development.',
      features: [
        '333 video interviews/month (4,000/year)',
        'Advanced AI conversations',
        'Premium interview analytics',
        'Team collaboration',
        'Priority support',
        'Additional interviews: $3.30 each'
      ],
      buttonText: 'Get started',
      buttonClass: 'pricing-button-primary',
      popular: true
    },
    {
      name: 'Expert',
      monthlyPrice: '$2,500',
      yearlyPrice: '$2,000',
      period: 'per month + VAT',
      description: 'Built for established companies needing white-label solutions and candidate feedback. Eliminates daily interview limits so HR can dedicate time to employer branding, retention strategies, and culture building.',
      features: [
        '833 video interviews/month (10,000/year)',
        'White-label solution',
        'Advanced analytics dashboard',
        'Feedback to candidates',
        '24/7 support',
        'Additional interviews: $3.00 each'
      ],
      buttonText: 'Get started',
      buttonClass: 'pricing-button-secondary',
      popular: false
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      period: 'pricing',
      description: 'Designed for large organizations with complex hiring needs. Provides unlimited scalability and custom integrations, allowing HR leadership to focus on workforce planning, diversity initiatives, and organizational development.',
      features: [
        'Unlimited interviews',
        'Custom integrations',
        'Enterprise security',
        'Tailored AI options',
        'Dedicated support team'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'pricing-button-secondary',
      popular: false
    }
  ];

  const features = [
    {
      category: 'Interview Specs',
      items: [
        {
          name: 'Monthly Interview Limit',
          essential: '67 (800/year)',
          plus: '333 (4,000/year)',
          expert: '833 (10,000/year)',
          enterprise: 'Unlimited'
        },
        {
          name: 'HR Team Efficiency Multiplier',
          essential: '3x productivity boost',
          plus: '5x productivity boost',
          expert: '8x productivity boost',
          enterprise: 'Enterprise scale efficiency'
        },
        {
          name: '4 Main Parameters',
          essential: '✓',
          plus: '✓',
          expert: '✓',
          enterprise: '✓'
        },
        {
          name: '10 Secondary Parameters',
          essential: ' ',
          plus: '✓',
          expert: '✓',
          enterprise: '✓'
        },
        {
          name: '6 Custom Parameters',
          essential: ' ',
          plus: ' ',
          expert: '✓',
          enterprise: ' '
        },
        {
          name: '72 Custom Parameters',
          essential: ' ',
          plus: ' ',
          expert: ' ',
          enterprise: '✓'
        },
        {
          name: 'Daily Interview Capacity',
          essential: '20',
          plus: '50',
          expert: 'No daily limit',
          enterprise: 'No daily limit'
        },
        {
          name: 'Additional Interview Cost',
          essential: '$4.00 each',
          plus: '$3.30 each',
          expert: '$3.00 each',
          enterprise: 'Included'
        }
      ]
    },
    {
      category: 'Key Features',
      items: [
        {
          name: 'AI Technology Level',
          essential: 'Basic screening',
          plus: 'Advanced AI',
          expert: 'Advanced AI',
          enterprise: 'Advanced AI'
        },
        {
          name: 'Team Collaboration',
          essential: '✗',
          plus: '✓',
          expert: '✓',
          enterprise: '✓'
        },
        {
          name: 'White-label Solution',
          essential: '✗',
          plus: '✗',
          expert: '✓',
          enterprise: '✓'
        },
        {
          name: 'Support Level',
          essential: 'Email',
          plus: 'Priority',
          expert: '24/7 + Manager',
          enterprise: 'Dedicated Team'
        }
      ]
    }
  ];

  const companies = [
    { name: 'Turkcell', logo: 'https://logo.clearbit.com/turkcell.com.tr' },
    { name: 'Garanti BBVA', logo: 'https://logo.clearbit.com/garanti.com.tr' },
    { name: 'Turkish Airlines', logo: 'https://logo.clearbit.com/turkishairlines.com' }
  ];

  return (
    <div className="pricing-page">
      <Header onLoginClick={onLoginClick} />
      
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-container">
          <h1 className="pricing-hero-title">
            One tool for your whole company.<br />
            Free for teams to try.
          </h1>
          
          {/* Trusted Companies Static */}
          <div className="trusted-companies-section">
            <p className="trusted-companies-text">Trusted by teams at</p>
            <div className="trusted-companies-static">
              {companies.map((company, index) => (
                <div key={index} className="trusted-company-item">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="trusted-company-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="trusted-company-name" style={{display: 'none'}}>
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="pricing-plans-section">
        <div className="pricing-container">
          <div className="pricing-toggle">
            <div className="toggle-wrapper">
              <button 
                className={`toggle-btn ${!isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Pay monthly
              </button>
              <button 
                className={`toggle-btn ${isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Pay yearly
              </button>
            </div>
            <div className="pricing-info">
              <span className="pricing-save-badge mobile-save">Save up to 20% with yearly + No monthly limit</span>
              <span className="pricing-save-badge desktop-save">Save up to 20% with yearly + No monthly limit</span>
              <span className="price-currency">Price in USD</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Recommended</div>}
                <div className="pricing-card-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <div className="price-line">
                      <span className="price">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.period && <span className="period">{plan.period}</span>}
                    </div>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <div className="pricing-card-footer">
                  <button className={`pricing-button ${plan.buttonClass}`}>
                    {plan.buttonText}
                  </button>
                </div>
                <div className="pricing-card-body">
                  <ul className="plan-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans and Features - Desktop Only */}
      <section className="pricing-features-section desktop-only">
        <div className="pricing-container">
          <h2 className="features-title">Plans and features</h2>
          
          <div className="features-table-header">
            <div className="feature-name-header"></div>
            <div className="plan-header">
              <div className="plan-info">
                <div className="plan-name">Essential</div>
                <div className="plan-price">
                  {isYearly ? '$250' : '$300'} <span>per month + VAT</span>
                </div>
                <button className="pricing-button pricing-button-secondary">Get started</button>
              </div>
            </div>
            <div className="plan-header">
              <div className="plan-info">
                <div className="plan-name">Plus</div>
                <div className="plan-price">
                  {isYearly ? '$1,000' : '$1,200'} <span>per month + VAT</span>
                </div>
                <button className="pricing-button pricing-button-primary">Get started</button>
              </div>
            </div>
            <div className="plan-header">
              <div className="plan-info">
                <div className="plan-name">Expert</div>
                <div className="plan-price">
                  {isYearly ? '$2,000' : '$2,500'} <span>per month + VAT</span>
                </div>
                <button className="pricing-button pricing-button-secondary">Get started</button>
              </div>
            </div>
            <div className="plan-header">
              <div className="plan-info">
                <div className="plan-name">Enterprise</div>
                <div className="plan-price">Custom <span>pricing</span></div>
                <button className="pricing-button pricing-button-secondary">Contact Sales</button>
              </div>
            </div>
          </div>

          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="feature-category">
              <h3 className="category-title">{category.category}</h3>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="feature-row">
                  <div className="feature-name">{item.name}</div>
                  <div className="feature-value">{item.essential}</div>
                  <div className="feature-value">{item.plus}</div>
                  <div className="feature-value">{item.expert}</div>
                  <div className="feature-value">{item.enterprise}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage; 