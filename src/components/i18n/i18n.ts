import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        description: 'This is a simple modal.',
        openModal: 'Open Modal',
        modalContentTitle: 'Modal Content',
        modalContentText: 'This is a simple modal.',
        closeModal: 'Close',
        inputPlaceholder: 'Enter text here',
        themeSwitcher: {
          light: 'Light theme',
          dark: 'Dark theme',
        },
        languageSwitcher: {
          switchToRussian: 'RU',
          switchToEnglish: 'EN',
        },
        addProductButton: 'Add Random Product',
      },
    },
    ru: {
      translation: {
        welcome: 'Добро пожаловать',
        description: 'Это простое модальное окно.',
        openModal: 'Открыть',
        modalContentTitle: 'Содержимое',
        modalContentText: 'Простое модальное окно.',
        closeModal: 'Закрыть',
        inputPlaceholder: 'Введите текст здесь',
        themeSwitcher: {
          light: 'Cветлая тема',
          dark: 'Темная тема',
        },
        languageSwitcher: {
          switchToRussian: 'РУ',
          switchToEnglish: 'EN',
        },
        addProductButton: 'Добавить случайный продукт',
      },
    },
  },
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
