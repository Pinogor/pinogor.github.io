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
        addProductButton: 'Add',
        productForm: {
          productName: 'Product Name',
          price: 'Price',
          description: 'Description',
          imageUrl: 'Image URL',
          submitButton: 'Add Product',
          nameRequired: 'Product name is required',
          priceRequired: 'Price is required',
          descriptionRequired: 'Description is required',
          invalidUrl: 'Invalid URL',
        },
        editProductForm: {
          submitButton: 'Update Product',
        },
        loginForm: {
          email: 'Email',
          password: 'Password',
          emailRequired: 'Email is required',
          invalidEmail: 'Invalid email address',
          passwordRequired: 'Password is required',
          passwordMinLength: 'Password must be at least 9 characters long',
          submitButton: 'Login',
        },
        registrationForm: {
          username: 'Username',
          email: 'Email',
          password: 'Password',
          usernameRequired: 'Username is required',
          emailRequired: 'Email is required',
          invalidEmail: 'Invalid email address',
          passwordRequired: 'Password is required',
          passwordMinLength: 'Password must be at least 6 characters long',
          submitButton: 'Register',
          placeholderEmail: 'Enter your email',
          placeholderPassword: 'Enter password',
          placeholderUsername: 'Enter your username',
        },
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
        addProductButton: 'Добавить',
        productForm: {
          productName: 'Название продукта',
          price: 'Цена',
          description: 'Описание',
          imageUrl: 'URL изображения',
          submitButton: 'Добавить продукт',
          nameRequired: 'Требуется указать название продукта',
          priceRequired: 'Требуется указать цену',
          descriptionRequired: 'Требуется указать описание',
          invalidUrl: 'Неверный URL',
        },
        editProductForm: {
          submitButton: 'Обновить продукт',
        },
        loginForm: {
          email: 'Электронная почта',
          password: 'Пароль',
          emailRequired: 'Требуется указать электронную почту',
          invalidEmail: 'Неверный адрес электронной почты',
          passwordRequired: 'Требуется указать пароль',
          passwordMinLength: 'Пароль должен содержать минимум 9 символов',
          submitButton: 'Войти',
        },
        registrationForm: {
          username: 'Имя пользователя',
          email: 'Электронная почта',
          password: 'Пароль',
          usernameRequired: 'Требуется указать имя пользователя',
          emailRequired: 'Требуется указать электронную почту',
          invalidEmail: 'Неверный адрес электронной почты',
          passwordRequired: 'Требуется указать пароль',
          passwordMinLength: 'Пароль должен содержать минимум 6 символов',
          submitButton: 'Зарегистрироваться',
          placeholderEmail: 'Введите свой Email',
          placeholderPassword: 'Введите пароль',
          placeholderUsername: 'Введите свое имя',
        },
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
