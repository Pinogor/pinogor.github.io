import React from 'react';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { LanguageProvider } from '../components/i18n/LanguageProvider';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import '../components/i18n/i18n'; // Импортируем и инициализируем i18next
import './App.css'; // Подключаем стили для App
import ModalExample from '../components/modal/ModalExample';
import '../index.css'; // Подключаем глобальные стили

const AppContent: React.FC = () => {
  const { t } = useTranslation(); // Используем хук useTranslation для получения функции t

  return (
    <div className="app-content">
      {/* Добавляем класс для центровки содержимого */}
      <h1>{t('welcome')}</h1>
      <ModalExample />
      <p>{t('description')}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <AppContent />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
