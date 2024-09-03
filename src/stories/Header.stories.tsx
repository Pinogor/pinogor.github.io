import React from 'react';
import Header from '../components/header/Header';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Shared/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});