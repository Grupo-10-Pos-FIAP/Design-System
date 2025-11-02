import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@components/Icon/Icon';
import { iconKeys } from '@utils/iconKeys';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: iconKeys,
      description: 'Nome do ícone a ser exibido',
    },
    color: {
      control: 'select',
      options: [
        'base',
        'white',
        'black',
        'disabled',
        'primary',
        'secondary',
        'soft',
        'success',
        'warning',
        'error',
        'info',
        'gray100',
        'gray200',
        'gray300',
        'gray400',
        'gray500',
        'gray600',
      ],
      description: 'Cor do ícone',
    },
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
      description: 'Tamanho do ícone',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do ícone',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'House',
    size: 'medium',
    color: 'base',
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="medium" color="base" />',
      },
    },
  },
};

export const ExtraSmall: Story = {
  args: {
    name: 'House',
    size: 'extra-small',
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="extra-small" />',
      },
    },
  },
};

export const Small: Story = {
  args: {
    name: 'House',
    size: 'small',
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="small" />',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    name: 'House',
    size: 'medium',
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="medium" />',
      },
    },
  },
};

export const Large: Story = {
  args: {
    name: 'House',
    size: 'large',
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="large" />',
      },
    },
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'House',
    size: 'extra-large',
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="extra-large" />',
      },
    },
  },
};

export const SizeVariants = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Icon name="Star" size="extra-small" color="primary" />
<Icon name="Star" size="small" color="primary" />
<Icon name="Star" size="medium" color="primary" />
<Icon name="Star" size="large" color="primary" />
<Icon name="Star" size="extra-large" color="primary" />`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'end',
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
      {(['extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <Icon name="Star" size={size} color="primary" />
          <span style={{ fontSize: '14px', color: '#666', textTransform: 'capitalize' }}>{size.replace('-', ' ')}</span>
        </div>
      ))}
    </div>
  ),
};

export const ColorVariants = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
// Cores principais
<Icon name="Heart" color="primary" size="large" />
<Icon name="Heart" color="secondary" size="large" />

// Cores de estado
<Icon name="Heart" color="success" size="large" />
<Icon name="Heart" color="warning" size="large" />
<Icon name="Heart" color="error" size="large" />
<Icon name="Heart" color="info" size="large" />
<Icon name="Heart" color="disabled" size="large" />

// Cores neutras
<Icon name="Heart" color="base" size="large" />
<Icon name="Heart" color="white" size="large" />
<Icon name="Heart" color="black" size="large" />

// Tons de cinza
<Icon name="Heart" color="gray100" size="large" />
<Icon name="Heart" color="gray200" size="large" />
<Icon name="Heart" color="gray300" size="large" />
<Icon name="Heart" color="gray400" size="large" />
<Icon name="Heart" color="gray500" size="large" />
<Icon name="Heart" color="gray600" size="large" />`,
      },
    },
  },
  render: () => {
    const colorGroups = {
      'Cores Principais': ['primary', 'secondary', 'soft'],
      'Cores de Estado': ['success', 'warning', 'error', 'info', 'disabled'],
      'Cores Neutras': ['base', 'white', 'black'],
      'Tons de Cinza': ['gray100', 'gray200', 'gray300', 'gray400', 'gray500', 'gray600'],
    } as const;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '32px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <div key={groupName}>
            <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>{groupName}</h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px',
                    backgroundColor: color === 'white' ? '#1a1a1a' : color.includes('gray') ? '#f8f9fa' : 'transparent',
                    borderRadius: '8px',
                    border:
                      color === 'white' ? '1px solid #e0e0e0' : color.includes('gray') ? '1px solid #e0e0e0' : 'none',
                    minWidth: '100px',
                  }}>
                  <Icon name="Heart" color={color} size="medium" />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'capitalize',
                      color: color === 'white' ? '#fff' : '#333',
                      textAlign: 'center',
                    }}>
                    {color.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const WhiteIcon = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<div style={{ backgroundColor: '#1a1a1a', padding: '32px', borderRadius: '12px' }}>
  <Icon name="Star" size="large" color="white" />
</div>

<div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
  <div style={{ backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '8px' }}>
    <Icon name="Heart" size="large" color="white" />
  </div>
  
  <div style={{ backgroundColor: '#f0f0f0', padding: '24px', borderRadius: '8px' }}>
    <Icon name="Heart" size="large" color="black" />
  </div>
</div>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Ícone Branco com Fundo Escuro</h3>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            padding: '32px',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
          }}>
          {(['extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <Icon name="Star" size={size} color="white" />
              <span
                style={{
                  fontSize: '14px',
                  color: '#fff',
                  textTransform: 'capitalize',
                }}>
                {size.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Comparação: Branco vs Preto</h3>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
            }}>
            <Icon name="Heart" size="large" color="white" />
            <span style={{ color: '#fff', fontWeight: '600' }}>White</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '24px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
            }}>
            <Icon name="Heart" size="large" color="black" />
            <span style={{ color: '#333', fontWeight: '600' }}>Black</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DisabledState = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Icon name="Star" size="large" color="primary" disabled />

<Icon name="Star" size="large" color="primary" />`,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Icon name="Star" size="large" color="primary" disabled />
        <span style={{ fontSize: '14px', color: '#666' }}>Desabilitado</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <Icon name="Star" size="large" color="primary" />
        <span style={{ fontSize: '14px', color: '#666' }}>Normal</span>
      </div>
    </div>
  ),
};
