import type { Meta, StoryObj } from '@storybook/react';
import ProductForm from './ProductForm';
import { ThemeProvider } from '../../../components/theme/ThemeProvider';
import { LanguageProvider } from '../../../components/i18n/LanguageProvider';
import Layout from '../../layout/Layout';
import React from 'react';

const meta: Meta<typeof ProductForm> = {
  title: 'Forms/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <ProductForm />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductForm>;

export const Default: Story = {
  args: {},
};
