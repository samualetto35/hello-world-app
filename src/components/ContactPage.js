import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import Header from './Header';
import Footer from './Footer';

const ContactPage = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    companyName: '',
    companySize: '',
    countryRegion: 'Türkiye',
    phoneNumber: '',
    reasonForContact: '',
    additionalDetails: '',
    marketingConsent: false
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const TestimonialSection = () => (
    <div className="testimonial-section">
      <div className="testimonial-card">
        <div className="testimonial-logo">TechCorp</div>
        <blockquote>
          "Finding the right talent was our biggest challenge until we discovered Recula. Their AI-powered platform transformed our hiring process, helping us identify top candidates faster and make better hiring decisions. It's revolutionized how we build our team."
        </blockquote>
        <div className="testimonial-author">
          <strong>Sarah Chen</strong><br />
          Head of Talent, TechCorp
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header onLoginClick={onLoginClick} />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-left">
              <h1>Contact our sales team</h1>
              <p className="subtitle">
                Get help with pricing and plans, schedule a demo, explore use-cases for your team, and more.
              </p>

              <div className="logos-section">
                <p className="logos-text">Millions run on Recula everyday</p>
                <div className="company-logos">
                  <img src="https://logo.clearbit.com/trendyol.com" alt="Trendyol" className="logo-image" />
                  <img src="https://logo.clearbit.com/hepsiburada.com" alt="Hepsiburada" className="logo-image" />
                  <img src="https://logo.clearbit.com/getir.com" alt="Getir" className="logo-image" />
                  <img src="https://logo.clearbit.com/bitaksi.com" alt="BiTaksi" className="logo-image" />
                </div>
              </div>

              {!isMobile && <TestimonialSection />}
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Ada"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Lovelace"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="workEmail">Work email *</label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job title *</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="companyName">Company name *</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Lovelace Inc."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companySize">Company size *</label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="countryRegion">Country or region *</label>
                    <select
                      id="countryRegion"
                      name="countryRegion"
                      value={formData.countryRegion}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Türkiye">Türkiye</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone number *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7891"
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="reasonForContact">Reason for contact *</label>
                  <select
                    id="reasonForContact"
                    name="reasonForContact"
                    value={formData.reasonForContact}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="demo">Request a demo</option>
                    <option value="pricing">Pricing information</option>
                    <option value="partnership">Partnership opportunities</option>
                    <option value="support">Technical support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="additionalDetails">Provide more details (optional)</label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    placeholder="How are you looking to use Notion?"
                    rows="4"
                  />
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    No, I do not want to receive marketing communications from Notion.
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Contact sales
                </button>
              </form>

              {isMobile && (
                <div className="mobile-testimonial">
                  <TestimonialSection />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage; 