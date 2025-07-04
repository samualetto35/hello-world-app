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
import AdaylarPage from './components/AdaylarPage';
import MulakatlarPage from './components/MulakatlarPage';
import RaporlarPage from './components/RaporlarPage';
import AyarlarPage from './components/AyarlarPage';
import YardimPage from './components/YardimPage';
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

function AppContent() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDemoLogin = () => {
    setShowModal(false);
    setIsLoggedIn(true);
    // Demo login sonrası dashboard sayfasına yönlendir
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Dashboard'dan çıkış yapınca ana sayfaya yönlendir
    navigate('/');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage onLoginClick={handleLoginClick} />} />
        <Route path="/faqs" element={<FAQsPage onLoginClick={handleLoginClick} />} />
        <Route path="/pricing" element={<PricingPage onLoginClick={handleLoginClick} />} />
        <Route path="/solutions" element={<SolutionsPage onLoginClick={handleLoginClick} />} />
        <Route path="/solutions-for-candidates" element={<SolutionsForCandidatesPage onLoginClick={handleLoginClick} />} />
        <Route path="/contact" element={<ContactPage onLoginClick={handleLoginClick} />} />
        <Route path="/dashboard" element={<DemoDashboard onLogout={handleLogout} />} />
        <Route path="/adaylar" element={<AdaylarPage />} />
        <Route path="/mulakatlar" element={<MulakatlarPage />} />
        <Route path="/raporlar" element={<RaporlarPage />} />
        <Route path="/ayarlar" element={<AyarlarPage />} />
        <Route path="/yardim" element={<YardimPage />} />
      </Routes>

      <LoginModal 
        isOpen={showModal}
        onClose={handleCloseModal}
        onDemoLogin={handleDemoLogin}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
