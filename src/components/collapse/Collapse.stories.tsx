import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    opened: {
      control: 'boolean',
      description: 'Controls the open state of the collapse component',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Collapse> = {
  args: {
    opened: true,
  },
  render: (args) => (
    <div>
      <h1>Collapse</h1>
      <Collapse opened={args.opened}>
        <p>
          Это компонент Collapse. Он принимает только opened и children. Когда opened: true, дочерние компоненты сначала
          монтируются, а потом плавно появляются. В обратном случае наоборот, после скрытия дочерних компонентов, они
          размонтируются.
        </p>
      </Collapse>
    </div>
  ),
};
