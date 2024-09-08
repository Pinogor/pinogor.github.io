import React from 'react';
import { useLanguage } from './LanguageProvider';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.css';
const LanguageSwitcher: React.FC = () => {
  const { toggleLanguage } = useLanguage();
  const { i18n, t } = useTranslation(); // Используем хук useTranslation для перевода

  return (
    <button className="language-switcher-button" onClick={toggleLanguage}>
      {i18n.language === 'en' ? t('languageSwitcher.switchToRussian') : t('languageSwitcher.switchToEnglish')}
    </button>
  );
};

export default LanguageSwitcher;
