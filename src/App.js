import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DashboardSection from './components/DashboardSection';
import LogoBanner from './components/LogoBanner';
import WhyPeopleLove from './components/WhyPeopleLove';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FAQsPage from './components/FAQsPage';
import PricingPage from './components/PricingPage';
import SolutionsPage from './components/SolutionsPage';
import SolutionsForCandidatesPage from './components/SolutionsForCandidatesPage';
import ContactPage from './components/ContactPage';
import DemoDashboard from './components/DemoDashboard';
import LoginModal from './components/LoginModal';

const HomePage = ({ onLoginClick }) => {
  return (
    <div className="App">
      <Header onLoginClick={onLoginClick} />
      <HeroSection />
      <DashboardSection />
      <LogoBanner />
      <WhyPeopleLove />
      <StatsSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

const DashboardPage = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Dashboard'dan çıkış yapınca ana sayfaya yönlendir
    navigate('/');
  };

  return <DemoDashboard onLogout={handleLogout} />;
};

const AppContent = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleDemoLogin = () => {
    setShowLoginModal(false);
    // Demo login sonrası dashboard sayfasına yönlendir
    navigate('/dashboard');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage onLoginClick={handleLoginClick} />} />
        <Route path="/solutions" element={<SolutionsPage onLoginClick={handleLoginClick} />} />
        <Route path="/solutions-for-candidates" element={<SolutionsForCandidatesPage onLoginClick={handleLoginClick} />} />
        <Route path="/faqs" element={<FAQsPage onLoginClick={handleLoginClick} />} />
        <Route path="/pricing" element={<PricingPage onLoginClick={handleLoginClick} />} />
        <Route path="/contact" element={<ContactPage onLoginClick={handleLoginClick} />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseModal}
        onDemoLogin={handleDemoLogin}
      />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
