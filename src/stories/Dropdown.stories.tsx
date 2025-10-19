import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Button } from '../components/Button/Button';
import { Edit3, Trash2, Ban } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      table: { disable: true },
    },
    items: {
      control: false,
      description: 'Items array from menu. Each item can contain `label`, `icon`, `onClick` and `disabled`.',
      table: {
        type: { summary: 'DropdownItem[]' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class for additional customization.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button variant="default">Actions</Button>,
    items: [
      { label: 'Edit', icon: <Edit3 size={16} />, onClick: () => {} },
      { label: 'Delete', icon: <Trash2 size={16} />, onClick: () => {} },
      { label: 'Disable', icon: <Ban size={16} />, disabled: true },
    ],
  },
};
