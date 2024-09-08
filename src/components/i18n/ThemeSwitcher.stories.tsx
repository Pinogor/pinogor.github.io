import React from 'react';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../theme/ThemeProvider';
import { LanguageProvider } from './LanguageProvider';
import Layout from '../layout/Layout';
import '../../index.css'; // Подключаем глобальные стили

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Layout></Layout>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof ThemeSwitcher> = {};
