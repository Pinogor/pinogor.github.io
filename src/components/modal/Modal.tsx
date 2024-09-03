import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;