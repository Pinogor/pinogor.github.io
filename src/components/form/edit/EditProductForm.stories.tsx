import { Meta, StoryObj } from '@storybook/react';
import EditProductForm from './EditProductForm';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { LanguageProvider } from '../../i18n/LanguageProvider';
import Layout from '../../layout/Layout';
import React from 'react';

const product = {
  id: 123,
  name: 'Sample Product',
  price: 100,
  description: 'This is a sample product',
  imageUrl: 'https://via.placeholder.com/150',
};

const meta: Meta<typeof EditProductForm> = {
  title: 'Forms/EditProductForm',
  component: EditProductForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <EditProductForm product={product} />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EditProductForm>;

export const Default: Story = {
  args: {
    product,
  },
};
