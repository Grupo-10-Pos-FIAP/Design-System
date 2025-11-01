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
      options: ['base', 'primary', 'secondary', 'neutral', 'soft'],
      description: 'Cor do divider'
    },
  }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    color: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: '<Divider orientation="horizontal" />'
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
  },
  parameters: {
    docs: {
      source: {
        code: '<Divider orientation="vertical" />'
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
