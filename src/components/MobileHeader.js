import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileHeader.css';

const MobileHeader = ({ onLoginClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSolutionsOptions, setShowSolutionsOptions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Special behavior for pricing page
      if (location.pathname === '/pricing') {
        // Always show header when near top
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else {
          // Check if we're in the features section
          const featuresSection = document.querySelector('.pricing-features-section');
          if (featuresSection) {
            const featuresSectionTop = featuresSection.offsetTop;
            const featuresSectionBottom = featuresSectionTop + featuresSection.offsetHeight;
            
            // If we're in the features section area, keep header hidden
            if (currentScrollY >= featuresSectionTop - 200 && currentScrollY <= featuresSectionBottom) {
              setIsVisible(false);
            } else {
              // Normal scroll behavior outside features section
              if (currentScrollY > lastScrollY) {
                setIsVisible(false);
              } else {
                setIsVisible(true);
              }
            }
          } else {
            // Fallback to normal behavior if features section not found
            if (currentScrollY > lastScrollY) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
          }
        }
      } else {
        // Normal behavior for other pages including solutions
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  return (
    <header className={`mobile-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="mobile-header-container">
        {/* Logo and Company Name */}
        <Link to="/" className="mobile-logo-section">
          <img src="/logo.png" alt="Recula Logo" className="mobile-logo-image" />
          <span className="mobile-company-name">Recula</span>
        </Link>

        {/* Auth Buttons */}
        <div className="mobile-auth-section">
          <button className="mobile-login-btn" onClick={onLoginClick}>Login</button>
          <Link to="/contact" className="mobile-signup-btn">Request a demo</Link>
        </div>
      </div>

      {/* Mobile Navigation Bar - Always visible */}
      <div className="mobile-nav-bar">
        <nav className="mobile-navigation">
          <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>Homepage</Link>
          
          {/* Solutions with dropdown */}
          <div className="mobile-solutions-section">
            <div 
              className={`mobile-nav-link solutions-trigger ${location.pathname.includes('/solutions') ? 'active' : ''}`}
              onClick={() => setShowSolutionsOptions(!showSolutionsOptions)}
            >
              Solutions {showSolutionsOptions ? '▲' : '▼'}
            </div>
            {showSolutionsOptions && (
              <div className="mobile-solutions-options">
                <Link 
                  to="/solutions" 
                  className="mobile-solution-option"
                  onClick={() => setShowSolutionsOptions(false)}
                >
                  For Business
                </Link>
                <Link 
                  to="/solutions-for-candidates" 
                  className="mobile-solution-option"
                  onClick={() => setShowSolutionsOptions(false)}
                >
                  For Candidates
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/pricing" className={`mobile-nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader; 