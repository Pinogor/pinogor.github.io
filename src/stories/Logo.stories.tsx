import React from 'react';
import Logo from '../components/logo/Logo';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Shared/Logo',
  component: Logo,
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});