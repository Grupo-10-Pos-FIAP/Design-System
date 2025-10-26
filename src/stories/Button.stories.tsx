import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'negative'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Default Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Negative: Story = {
  args: {
    children: 'Negative Button',
    variant: 'negative',
  },
};
