import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Meta, StoryObj } from '@storybook/react';
import { LanguageProvider } from './LanguageProvider';
import ModalExample from '../modal/ModalExample';
import '../../index.css'; // Подключаем глобальные стили

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof LanguageSwitcher> = {
  render: () => (
    <>
      <LanguageSwitcher />
      <ModalExample />
    </>
  ),
};
