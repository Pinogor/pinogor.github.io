import React from 'react';
import LanguageSwitcher from '../components/i18n/LanguageSwitcher';
import { Meta, Story } from '@storybook/react';
import { LanguageProvider } from '../components/i18n/LanguageProvider';
import ModalExample from '../components/modal/ModalExample';

export default {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
} as Meta;

const Template: Story = () => (
  <LanguageProvider>
    <LanguageSwitcher />
    <ModalExample />
  </LanguageProvider>
);

export const Default = Template.bind({});
