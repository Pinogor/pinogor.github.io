import type { Meta } from '@storybook/react';
import ProductList from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'Components/ProductList',
  component: ProductList,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        description: 'Description for product 1.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        description: 'Description for product 2.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        description: 'Description for product 3.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 39.99,
        description: 'Description for product 4.',
        imageUrl: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 59.99,
        description: 'Description for product 5.',
        imageUrl: 'https://via.placeholder.com/150',
      },
    ],
  },
};