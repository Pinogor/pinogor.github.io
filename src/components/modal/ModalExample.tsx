import React, { useState } from 'react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

const ModalExample: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const { t } = useTranslation();

  const handleClose = () => setIsVisible(false); // Функция для закрытия модального окна

  // Функция для перевода текста, введенного пользователем
  const translateUserInput = (text: string): string => {
    const translation = t(`userText.${text}`, { defaultValue: text });
    return translation;
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={t('inputPlaceholder')}
      />
      <button onClick={() => setIsVisible(true)}>{t('openModal')}</button>

      <Modal visible={isVisible} onClose={handleClose}>
        {' '}
        {/* Передаем функцию handleClose */}
        <h2>{t('modalContentTitle')}</h2>
        <p>{translateUserInput(inputText)}</p>
        <button onClick={handleClose}>{t('closeModal')}</button>
      </Modal>
    </div>
  );
};

export default ModalExample;
