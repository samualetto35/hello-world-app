import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onDemoLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleDemoLogin = () => {
    onDemoLogin();
    onClose();
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="login-header">
          <h2>Welcome to Recula</h2>
          <p>Sign in to your account</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button className="demo-login-btn" onClick={handleDemoLogin}>
          Try Demo Dashboard
        </button>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 