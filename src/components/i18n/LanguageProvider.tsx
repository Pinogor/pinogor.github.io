import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext({
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation(); // Получаем экземпляр i18n из useTranslation()

  const toggleLanguage = () => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    } else {
      console.error('i18n.changeLanguage is not defined');
    }
  };

  return <LanguageContext.Provider value={{ toggleLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
