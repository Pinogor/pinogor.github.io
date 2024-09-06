import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void; // Добавляем новый пропс onClose
}

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>×</button> {/* Добавляем обработчик onClick */}
        {children}
      </div>
    </div>
  );
};

export default Modal;