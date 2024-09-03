// src/stories/Modal.stories.tsx

import React from 'react';
import Modal from '../components/modal/Modal';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Shared/Modal',
  component: Modal,
} as Meta;

const Template: Story<{ visible: boolean }> = (args) => (
  <Modal visible={args.visible}>
    <h2>Modal Content</h2>
    <p>This is a simple modal.</p>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  visible: true,
};