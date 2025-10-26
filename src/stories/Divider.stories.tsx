import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '@components/Divider/Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direção do divider'
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'base'],
      description: 'Cor do divider'
    },
  }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    color: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: '<Divider orientation="horizontal" color="default" />'
      }
    }
  },
  render: (args) => (
    <div style={{ 
      width: '300px',
      padding: '20px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ fontSize: '14px', color: '#666' }}>Conteúdo acima</span>
        <Divider {...args} />
        <span style={{ fontSize: '14px', color: '#666' }}>Conteúdo abaixo</span>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    color: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: '<Divider orientation="vertical" color="default" />'
      }
    }
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      alignItems: 'center', 
      height: '80px',
      padding: '24px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <span style={{ fontSize: '14px', color: '#666' }}>Item esquerdo</span>
      <Divider {...args} />
      <span style={{ fontSize: '14px', color: '#666' }}>Item direito</span>
    </div>
  ),
};

export const ColorVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Divider orientation="horizontal" color="default" />

<Divider orientation="horizontal" color="primary" />

<Divider orientation="horizontal" color="base" />`
      }
    }
  },
  render: () => {
    const colors = ['default', 'primary', 'base'] as const;
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '24px', 
        padding: '32px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        width: '400px'
      }}>
        {colors.map((color) => (
          <div key={color} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Texto acima</span>
              <span style={{ 
                fontSize: '12px', 
                fontWeight: '600',
                textTransform: 'capitalize',
                color: color === 'primary' ? '#1c6ea4' : color === 'base' ? '#1a1a1a' : '#666'
              }}>
                {color}
              </span>
            </div>
            <Divider orientation="horizontal" color={color} />
            <span style={{ fontSize: '14px', color: '#666' }}>Texto abaixo</span>
          </div>
        ))}
      </div>
    );
  },
};


export const MultipleDividers: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
  <div>
    <h3>Título Principal</h3>
    <p>Esta é uma descrição ou conteúdo introdutório.</p>
  </div>
  
  <Divider orientation="horizontal" color="primary" />
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <h4>Seção 1</h4>
    <p>Conteúdo da primeira seção.</p>
  </div>
  
  <Divider orientation="horizontal" color="default" />
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <h4>Seção 2</h4>
    <p>Conteúdo da segunda seção.</p>
  </div>
  
  <Divider orientation="horizontal" color="default" />
  
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span>Item 1</span>
    <Divider orientation="vertical" color="default" />
    <span>Item 2</span>
    <Divider orientation="vertical" color="default" />
    <span>Item 3</span>
  </div>
</div>`
      }
    }
  },
  render: () => (
    <div style={{ 
      padding: '32px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '500px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Título Principal</h3>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            Esta é uma descrição ou conteúdo introdutório.
          </p>
        </div>
        
        <Divider orientation="horizontal" color="primary" />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, color: '#333' }}>Seção 1</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            Conteúdo da primeira seção.
          </p>
        </div>
        
        <Divider orientation="horizontal" color="default" />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, color: '#333' }}>Seção 2</h4>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            Conteúdo da segunda seção.
          </p>
        </div>
        
        <Divider orientation="horizontal" color="default" />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Item 1</span>
          <Divider orientation="vertical" color="default" />
          <span style={{ fontSize: '14px', color: '#666' }}>Item 2</span>
          <Divider orientation="vertical" color="default" />
          <span style={{ fontSize: '14px', color: '#666' }}>Item 3</span>
        </div>
      </div>
    </div>
  ),
};