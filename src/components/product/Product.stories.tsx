import React from 'react';
import { Meta, Story } from '@storybook/react';
import Product from './Product';

export default {
  title: 'Components/Product',
  component: Product,
} as Meta;

const Template: Story<{ product: any }> = (args) => <Product product={args.product} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 1,
    name: 'Sample Product',
    price: 29.99,
    description: 'This is a sample product description.',
    imageUrl: 'https://via.placeholder.com/150',
  },
};
