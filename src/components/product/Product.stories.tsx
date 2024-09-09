import type { Meta } from '@storybook/react';
import Product from './Product';

const meta: Meta<typeof Product> = {
  title: 'Components/Product',
  component: Product,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    product: {
      id: 1,
      name: 'Sample Product',
      price: 29.99,
      description: 'This is a sample product description.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  },
};