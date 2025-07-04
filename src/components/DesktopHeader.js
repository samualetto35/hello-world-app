import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DesktopHeader.css';

const DesktopHeader = ({ onLoginClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const dropdownRef = useRef(null);
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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSolutionsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowSolutionsDropdown(false);
    }
  };

  return (
    <header className={`desktop-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="logo-section">
          <img src="/logo.png" alt="Recula Logo" className="logo-image" />
          <span className="company-name">Recula</span>
        </Link>

        {/* Navigation - Centered */}
        <nav className="navigation">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Homepage</Link>
          
          {/* Solutions Dropdown */}
          <div 
            ref={dropdownRef}
            className="solutions-dropdown"
            onMouseEnter={() => setShowSolutionsDropdown(true)}
            onKeyDown={handleKeyDown}
          >
            <span 
              className={`nav-link dropdown-trigger ${location.pathname.includes('/solutions') ? 'active' : ''}`}
              onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowSolutionsDropdown(!showSolutionsDropdown);
                }
              }}
              tabIndex={0}
              role="button"
              aria-expanded={showSolutionsDropdown}
              aria-haspopup="true"
            >
              Solutions ▼
            </span>
            {showSolutionsDropdown && (
              <div className="dropdown-menu" role="menu">
                <Link 
                  to="/solutions" 
                  className="dropdown-item"
                  onClick={() => setShowSolutionsDropdown(false)}
                  role="menuitem"
                >
                  <div className="dropdown-item-content">
                    <strong>For Business</strong>
                    <span>AI-powered hiring solutions</span>
                  </div>
                </Link>
                <Link 
                  to="/solutions-for-candidates" 
                  className="dropdown-item"
                  onClick={() => setShowSolutionsDropdown(false)}
                  role="menuitem"
                >
                  <div className="dropdown-item-content">
                    <strong>For Candidates</strong>
                    <span>Interview practice & preparation</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </nav>

        {/* Auth Section */}
        <div className="auth-section">
          <button className="login-btn" onClick={onLoginClick}>Login</button>
          <Link to="/contact" className="signup-btn">Request demo</Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader; 