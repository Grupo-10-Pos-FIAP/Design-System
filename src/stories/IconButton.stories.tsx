import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '@components/IconButton/IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
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
