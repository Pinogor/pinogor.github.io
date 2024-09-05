import React from 'react';
import { Meta, Story } from '@storybook/react';
import ResizableBox from './ResizableBox';

const meta: Meta<typeof ResizableBox> = {
  title: 'Components/ResizableBox',
  component: ResizableBox,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  render: () => (
    <div>
      <ResizableBox>
        <div style={{ padding: '10px', textAlign: 'center' }}>
          Александр Блок
          <br />
          Ночь, улица, фонарь, аптека… (отрывок из цикла «Пляски смерти») Ночь, улица, фонарь, аптека,
          <br /> Бессмысленный и тусклый свет.
          <br />
          Живи еще хоть четверть века — <br />
          Всё будет так. Исхода нет.
          <br /> Умрёшь — начнёшь опять сначала <br />И повторится всё, как встарь: <br />
          Ночь, ледяная рябь канала, <br />
          Аптека, улица, фонарь.
        </div>
      </ResizableBox>
    </div>
  ),
};
