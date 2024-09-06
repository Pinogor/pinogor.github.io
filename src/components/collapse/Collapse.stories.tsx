import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';
import React from 'react';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    opened: {
      control: 'boolean',
      description: 'Controls the open state of the collapse component',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Collapse> = {
  render: (args) => (
    <div>
      <Collapse {...args}>
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
          <p>Collapse.</p>
          <p>
            Это компонент Collapse. Он принимает только opened и children. Когда opened: true, дочерние компоненты
            сначала монтируются, а потом плавно появляются. В обратном случае наоборот, после скрытия дочерних
            компонентов, они размонтируются.
          </p>
        </div>
      </Collapse>
    </div>
  ),
  args: {
    opened: true,
  },
};
