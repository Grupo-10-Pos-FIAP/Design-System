import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@components/IconButton/IconButton';
import { IconName } from '@components/Icon/interfaces';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: 'Plus',
    variant: 'default',
    'aria-label': 'Adicionar',
  },
};

export const Loading: Story = {
  args: {
    icon: 'Plus',
    variant: 'default',
    size: 'lg',
    'aria-label': 'Carregando',
  },
};
