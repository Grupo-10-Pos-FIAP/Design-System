// stories/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '@components/Input/Input';
import { iconKeys } from '@utils/iconKeys';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de input para formulários com múltiplas variantes e estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Variante visual do input',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do input',
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Status visual do input',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Largura total do container',
    },
    label: {
      control: 'text',
      description: 'Label do input',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda abaixo do input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Tipo do input',
    },
    startIcon: {
      control: 'select',
      options: iconKeys,
      description: 'Ícone no início do input'
    },
    endIcon: {
      control: 'select',
      options: iconKeys,
      description: 'Ícone no final do input'
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica
export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Input padrão',
  },
};

export const Variants: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Label do input',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '300px' }}>
      <div>
        <Input {...args} variant="default" label="Variante Default" />
      </div>
      <div>
        <Input {...args} variant="filled" label="Variante Filled" />
      </div>
      <div>
        <Input {...args} variant="outlined" label="Variante Outlined" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Label do input',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} size="small" label="Small" />
      </div>
      <div>
        <Input {...args} size="medium" label="Medium" />
      </div>
      <div>
        <Input {...args} size="large" label="Large" />
      </div>
    </div>
  ),
};

export const Status: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Label do input',
    helperText: 'Texto de ajuda',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} status="default" label="Status Default" />
      </div>
      <div>
        <Input {...args} status="success" label="Status Success" helperText="Tudo certo!" />
      </div>
      <div>
        <Input {...args} status="warning" label="Status Warning" helperText="Atenção necessária" />
      </div>
      <div>
        <Input {...args} status="error" label="Status Error" helperText="Erro no campo" />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Input com ícones',
    startIcon: 'Search',
    endIcon: 'Eye',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input
          {...args}
          startIcon="Search"
          endIcon={undefined}
          label="Com ícone no início"
          placeholder="Buscar..."
        />
      </div>
      <div>
        <Input
          {...args}
          startIcon={undefined}
          endIcon="Eye"
          label="Com ícone no final"
          type="password"
          placeholder="Sua senha"
        />
      </div>
      <div>
        <Input
          {...args}
          startIcon="User"
          endIcon="Check"
          label="Com ícones em ambos"
          status="success"
          helperText="Usuário válido"
        />
      </div>
    </div>
  ),
};

export const States: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Label do input',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} label="Input normal" />
      </div>
      <div>
        <Input {...args} disabled label="Input desabilitado" />
      </div>
      <div>
        <Input {...args} fullWidth label="Input largura total" />
      </div>
      <div>
        <Input
          {...args}
          required
          label="Input obrigatório"
          helperText="Este campo é obrigatório"
        />
      </div>
    </div>
  ),
};

export const InputTypes: Story = {
  args: {
    label: 'Diferentes tipos de input',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} type="email" placeholder="email@exemplo.com" label="Email" />
      </div>
      <div>
        <Input {...args} type="password" placeholder="Sua senha" label="Senha" />
      </div>
      <div>
        <Input {...args} type="number" placeholder="123" label="Número" />
      </div>
      <div>
        <Input {...args} type="tel" placeholder="(11) 99999-9999" label="Telefone" />
      </div>
      <div>
        <Input {...args} type="url" placeholder="https://exemplo.com" label="URL" />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ width: '400px', padding: '24px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#1a1a1a' }}>Formulário de Exemplo</h3>
        
        <Input
          label="Nome completo"
          placeholder="Seu nome completo"
          startIcon="User"
          required
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          startIcon="Mail"
          status="success"
          helperText="Email válido"
        />
        
        <Input
          label="Senha"
          type="password"
          placeholder="Sua senha"
          startIcon="Lock"
          status="error"
          helperText="Senha deve ter pelo menos 8 caracteres"
        />
        
        <Input
          label="Telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          startIcon="Phone"
        />
        
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button
            type="button"
            style={{
              padding: '12px 24px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            Cancelar
          </button>
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              background: '#1c6ea4',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    status: 'default',
    disabled: false,
    fullWidth: false,
    label: 'Label do input',
    placeholder: 'Digite algo...',
    helperText: 'Texto de ajuda opcional',
    startIcon: undefined,
    endIcon: undefined,
  },
};