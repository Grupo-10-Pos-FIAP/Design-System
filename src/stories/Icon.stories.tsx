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
  parameters: {
    docs: {
      source: {
        code: '<Icon name="House" size="medium" color="base" />'
      }
    }
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
        code: '<Icon name="House" size="extra-small" />'
      }
    }
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
        code: '<Icon name="House" size="small" />'
      }
    }
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
        code: '<Icon name="House" size="medium" />'
      }
    }
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
        code: '<Icon name="House" size="large" />'
      }
    }
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
        code: '<Icon name="House" size="extra-large" />'
      }
    }
  },
};

type StoryWithoutArgs = StoryObj<typeof meta>;

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
<Icon name="Star" size="extra-large" color="primary" />`
      }
    }
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

export const ColorVariants = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Icon name="Heart" color="base" size="large" />
<Icon name="Heart" color="primary" size="large" />
<Icon name="Heart" color="secondary" size="large" />
<Icon name="Heart" color="success" size="large" />
<Icon name="Heart" color="warning" size="large" />
<Icon name="Heart" color="error" size="large" />
<Icon name="Heart" color="info" size="large" />
<Icon name="Heart" color="white" size="large" />
<Icon name="Heart" color="black" size="large" />`
      }
    }
  },
  render: () => {
    const colors = ['base', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'white', 'black'] as const;
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {colors.map((color) => (
          <div 
            key={color} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '12px',
              padding: '16px',
              backgroundColor: color === 'white' ? '#1a1a1a' : 'transparent',
              borderRadius: '8px',
              border: color === 'white' ? '1px solid #e0e0e0' : 'none'
            }}
          >
            <Icon name="Heart" color={color} size="large" />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600',
              textTransform: 'capitalize',
              color: color === 'white' ? '#fff' : '#333'
            }}>
              {color}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

export const AllIcons = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Icon name="House" size="medium" color="primary" />
<Icon name="Star" size="medium" color="primary" />
<Icon name="Heart" size="medium" color="primary" />
<Icon name="User" size="medium" color="primary" />
<Icon name="Settings" size="medium" color="primary" />
<Icon name="Search" size="medium" color="primary" />
<Icon name="Calendar" size="medium" color="primary" />
<Icon name="Camera" size="medium" color="primary" />
<Icon name="Camera" size="medium" color="primary" />
`
      }
    }
  },
  render: () => {
    const sampleIcons = ['House', 'Star', 'Heart', 'User', 'Settings', 'Search', 'Bell', 'Calendar', 'Camera', 'Chat'] as const;
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {sampleIcons.map((iconName) => (
          <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Icon name={iconName} size="medium" color="primary" />
            <span style={{ 
              fontSize: '12px', 
              color: '#666',
              textAlign: 'center',
              wordBreak: 'break-word'
            }}>
              {iconName}
            </span>
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
</div>`
      }
    }
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '24px', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Ícone Branco com Fundo Escuro</h3>
        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          alignItems: 'center',
          padding: '32px',
          backgroundColor: '#1a1a1a',
          borderRadius: '12px'
        }}>
          {(['extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <Icon name="Star" size={size} color="white" />
              <span style={{ 
                fontSize: '14px', 
                color: '#fff',
                textTransform: 'capitalize' 
              }}>
                {size.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Comparação: Branco vs Preto</h3>
        <div style={{ 
          display: 'flex', 
          gap: '32px', 
          alignItems: 'center',
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '12px',
            padding: '24px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px'
          }}>
            <Icon name="Heart" size="large" color="white" />
            <span style={{ color: '#fff', fontWeight: '600' }}>White</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '12px',
            padding: '24px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
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

<Icon name="Star" size="large" color="primary" />`
      }
    }
  },
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      alignItems: 'center', 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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