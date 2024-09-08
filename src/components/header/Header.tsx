import React from 'react';
import Logo from '../logo/Logo';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import '../../index.css'; // Подключаем глобальные стили

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header-controls">
        {' '}
        {/* Контейнер для кнопок */}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
