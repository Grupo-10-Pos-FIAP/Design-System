import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../components/Icon/Icon';
import { icons } from 'lucide-react';

const iconKeys = Object.keys(icons) as Array<keyof typeof icons>;

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconKeys,
      description: 'Nome do ícone a ser exibido'
    },
    color: {
      control: 'select',
      options: ['base', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'white', 'black'],
      description: 'Cor do ícone'
    },
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
      description: 'Tamanho do ícone'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do ícone'
    },
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'House',
    size: 'medium',
    color: 'base',
  },
};

export const ExtraSmall: Story = {
  args: {
    name: 'House',
    size: 'extra-small',
  },
};

export const Small: Story = {
  args: {
    name: 'House',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'House',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'House',
    size: 'large',
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'House',
    size: 'extra-large',
  },
};

export const SizeVariants: Story = {
  args: {
    name: 'Star',
    size: 'medium',
    color: 'primary',
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      alignItems: 'end', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {(['extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Icon name="Star" size={size} color="primary" />
          <span style={{ fontSize: '14px', color: '#666', textTransform: 'capitalize' }}>
            {size.replace('-', ' ')}
          </span>
        </div>
      ))}
    </div>
  ),
};

// Story demonstrando todas as cores
export const ColorVariants: Story = {
  args: {
    name: 'Heart',
    color: 'base',
    size: 'large',
  },
  render: () => {
    const colors = ['base', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'white', 'black'] as const;
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {colors.map((color) => (
          <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Icon name="Heart" color={color} size="large" />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>
              {color}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
