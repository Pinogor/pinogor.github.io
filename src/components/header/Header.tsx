// src/shared/header/Header.tsx

import React from 'react';
import Logo from '../logo/Logo';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};

export default Header;