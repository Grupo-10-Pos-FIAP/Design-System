import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../components/Icon';
import { icons } from 'lucide-react';

const iconKeys = Object.keys(icons) as Array<keyof typeof icons>;

const meta = {
  title: 'Componentes/Icon',
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
      options: ['base', 'primary', 'secondary'],
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
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories para cada tamanho
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

// Stories para cada cor
export const BaseColor: Story = {
  args: {
    name: 'House',
    color: 'base',
    size: 'medium',
  },
};

export const PrimaryColor: Story = {
  args: {
    name: 'House',
    color: 'primary',
    size: 'medium',
  },
};

export const SecondaryColor: Story = {
  args: {
    name: 'House',
    color: 'secondary',
    size: 'medium',
  },
};

// Story demonstrando todos os tamanhos
export const SizeVariants: Story = {
  args: {
    name: 'Star',
    size: 'medium',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'end', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Icon name="Star" size="extra-small" />
        <span>Extra Small (16px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Icon name="Star" size="small" />
        <span>Small (20px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Icon name="Star" size="medium" />
        <span>Medium (24px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Icon name="Star" size="large" />
        <span>Large (32px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Icon name="Star" size="extra-large" />
        <span>Extra Large (40px)</span>
      </div>
    </div>
  ),
};

// Story demonstrando todas as cores
export const ColorVariants: Story = {
  args: {
    name: 'Heart',
    color: 'base',
    size: 'medium',
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '30px', 
      alignItems: 'center', 
      padding: '30px',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Icon name="Heart" color="base" size="large" />
        <span style={{ fontWeight: '600', color: 'var(--color-base)' }}>Base</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Icon name="Heart" color="primary" size="large" />
        <span style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Primary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Icon name="Heart" color="secondary" size="large" />
        <span style={{ fontWeight: '600', color: 'var(--color-secondary)' }}>Secondary</span>
      </div>
    </div>
  ),
};

// Story demonstrando cores com diferentes ícones
export const ColorExamples: Story = {
  args: {
    name: 'Star',
    color: 'primary',
    size: 'medium',
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px', 
      padding: '30px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Coluna Base */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <h4 style={{ color: 'var(--color-base)', margin: 0 }}>Base Color</h4>
        <Icon name="User" color="base" size="medium" />
        <Icon name="Settings" color="base" size="medium" />
        <Icon name="Bell" color="base" size="medium" />
      </div>
      
      {/* Coluna Primary */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <h4 style={{ color: 'var(--color-primary)', margin: 0 }}>Primary Color</h4>
        <Icon name="User" color="primary" size="medium" />
        <Icon name="Settings" color="primary" size="medium" />
        <Icon name="Bell" color="primary" size="medium" />
      </div>
      
      {/* Coluna Secondary */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <h4 style={{ color: 'var(--color-secondary)', margin: 0 }}>Secondary Color</h4>
        <Icon name="User" color="secondary" size="medium" />
        <Icon name="Settings" color="secondary" size="medium" />
        <Icon name="Bell" color="secondary" size="medium" />
      </div>
    </div>
  ),
};

// Story combinando cores e estados
export const ColorAndStates: Story = {
  args: {
    name: 'Mail',
    color: 'primary',
    size: 'medium',
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '25px', 
      padding: '30px',
      background: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="base" size="large" />
          <span>Base Normal</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="base" size="large" disabled />
          <span>Base Disabled</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="primary" size="large" />
          <span>Primary Normal</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="primary" size="large" disabled />
          <span>Primary Disabled</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="secondary" size="large" />
          <span>Secondary Normal</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Icon name="Mail" color="secondary" size="large" disabled />
          <span>Secondary Disabled</span>
        </div>
      </div>
    </div>
  ),
};