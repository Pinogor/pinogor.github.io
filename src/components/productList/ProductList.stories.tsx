import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductList from './ProductList';

export default {
  title: 'Components/ProductList',
  component: ProductList,
} as Meta;

const Template: Story<{ products: any[] }> = (args) => <ProductList products={args.products} />;

export const Default = Template.bind({});
Default.args = {
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
    {
      id: 6,
      name: 'Product 6',
      price: 59.99,
      description: 'Description for product 5.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Product 5',
      price: 59.99,
      description: 'Description for product 5.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 59.99,
      description: 'Description for product 5.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ],
};
