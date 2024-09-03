import React from 'react';
import Layout from '../components/layout/Layout';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Shared/Layout',
  component: Layout,
} as Meta;

const Template: Story<{ children: React.ReactNode }> = (args) => <Layout>{args.children}</Layout>;

export const Default = Template.bind({});
Default.args = {
  children: <div>Page Content</div>,
};