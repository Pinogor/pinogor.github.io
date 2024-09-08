import React from 'react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next'; // Импортируем хук useTranslation
import './themeSwitcher.css';
import i18n from '../i18n/i18n';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation(); // Используем хук useTranslation для перевода

  return (
    <button className="theme-switcher-button" onClick={toggleTheme}>
      {theme === 'light' ? t('themeSwitcher.dark') : t('themeSwitcher.light')}
    </button>
  );
};

export default ThemeSwitcher;
