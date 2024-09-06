// src/components/ThemeSwitcher.stories.tsx

import React from 'react';
import ThemeSwitcher from '../components/theme/ThemeSwitcher';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '../components/theme/ThemeProvider';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta;

const Template: Story = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);

export const Default = Template.bind({});