import React, { useState, useEffect } from 'react';
import './AnimatedSteps.css';

const AnimatedSteps = () => {
  const steps = [
    'Add candidates',
    'Set preferences',
    'Choose timeline',
    'Let Recula handle rest'
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showNone, setShowNone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [exitingStep, setExitingStep] = useState(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        // Mobile: Smooth transition with exit animation
        setExitingStep(currentStep);
        
        setTimeout(() => {
          setCurrentStep(prev => (prev + 1) % steps.length);
          setExitingStep(null);
        }, 300); // Wait for exit animation
        
      } else {
        // Desktop: Original behavior
        if (showNone) {
          setShowNone(false);
          setCurrentStep(0);
        } else if (!showAll) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
          } else {
            setShowAll(true);
            setTimeout(() => {
              setShowAll(false);
              setShowNone(true);
            }, 2000);
          }
        }
      }
    }, isMobile ? 2500 : 1000); // 2.5 seconds on mobile for smoother experience

    return () => clearInterval(interval);
  }, [currentStep, showAll, showNone, steps.length, isMobile]);

  const renderStepText = (step) => {
    if (step === 'Let Recula handle rest') {
      return (
        <>
          Let <span className="recula-text">Recula</span> handle rest
        </>
      );
    }
    return step;
  };

  const getStepClass = (index) => {
    if (isMobile) {
      // Mobile: Enhanced state management
      if (index === exitingStep) return 'exiting';
      if (index === currentStep && exitingStep === null) return 'visible';
      return 'hidden';
    } else {
      // Desktop: Original logic
      if (showNone) return 'hidden';
      if (!showAll && index > currentStep) return 'hidden';
      if (showAll) return 'visible all-visible';
      if (index === currentStep) return 'visible current';
      return 'visible previous';
    }
  };

  const getSeparatorClass = (index) => {
    if (isMobile) return 'hidden'; // No separators on mobile
    
    if (showNone) return 'hidden';
    if (showAll) return 'visible';
    if (index < currentStep) return 'visible';
    return 'hidden';
  };

  return (
    <div className="animated-steps">
      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <span className={`step ${getStepClass(index)}`}>
              {renderStepText(step)}
            </span>
            {!isMobile && index < steps.length - 1 && (
              <span className={`separator ${getSeparatorClass(index)}`}>
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSteps; 