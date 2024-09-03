// src/stories/Modal.stories.tsx

import React, { useState } from 'react';
import Modal from '../components/modal/Modal';
import { Meta, Story } from '@storybook/react';
import ModalExample from '../components/modal/ModalExample';
import '../components/i18n/i18n';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<{ visible: boolean }> = (args) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  
  const handleClose = () => setIsVisible(false); // Функция для закрытия модального окна

  return (
    <Modal visible={isVisible} onClose={handleClose}> {/* Добавляем проп onClose */}
      <h2>Modal Content</h2>
      <p>This is a simple modal.</p>
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  visible: true,
};

export const Example: Story = () => <ModalExample />;