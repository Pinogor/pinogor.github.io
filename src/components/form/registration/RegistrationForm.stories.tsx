import type { Meta, StoryObj } from '@storybook/react';
import RegistrationForm from './RegistrationForm';
import { ThemeProvider } from '../../../components/theme/ThemeProvider';
import { LanguageProvider } from '../../../components/i18n/LanguageProvider';
import Layout from '../../layout/Layout';
import React from 'react';

const meta: Meta<typeof RegistrationForm> = {
  title: 'Forms/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <RegistrationForm />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
  args: {},
};
