import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({ onLoginClick }) => {
  return (
    <>
      <DesktopHeader onLoginClick={onLoginClick} />
      <MobileHeader onLoginClick={onLoginClick} />
    </>
  );
};

export default Header; 