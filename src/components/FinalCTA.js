import React from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="demo-video-section">
          <h3 className="demo-video-title">See Recula in Action</h3>
          <div className="demo-video-container">
            <div className="demo-video-placeholder">
              <div className="video-play-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#f97316"/>
                  <polygon points="10,8 16,12 10,16" fill="white"/>
                </svg>
              </div>
              <p className="video-placeholder-text">Demo Video Coming Soon</p>
            </div>
          </div>
          <p className="demo-video-subtitle">
            "Watch how our AI talks to real candidates."
          </p>
        </div>
        
        <h2 className="final-cta-title">Ready to automate your interviews?</h2>
        
        <div className="final-cta-buttons">
          <Link to="/contact" className="final-cta-button primary">
            Request a Demo
          </Link>
          <button className="final-cta-button secondary">
            Reach Us
          </button>
        </div>
        
        <p className="final-cta-subtext">
          Let Recula handle the first round — so you can focus on the best ones.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA; 