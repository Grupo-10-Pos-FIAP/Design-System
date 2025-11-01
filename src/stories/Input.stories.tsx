import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@components/Input/Input';
import { iconKeys } from '@utils/iconKeys';

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Variante visual do input',
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
      description: 'Ícone no início do input',
    },
    endIcon: {
      control: 'select',
      options: iconKeys,
      description: 'Ícone no final do input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Input padrão',
    variant: 'default',
    status: 'default',
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<Input placeholder="Digite algo..." label="Input padrão" />',
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Input 
  variant="default" 
  placeholder="Digite algo..." 
  label="Variante Default" 
/>
<Input 
  variant="filled" 
  placeholder="Digite algo..." 
  label="Variante Filled" 
/>
<Input 
  variant="outlined" 
  placeholder="Digite algo..." 
  label="Variante Outlined" 
/>`,
      },
    },
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


export const Status: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Input 
  status="default" 
  placeholder="Digite algo..." 
  label="Status Default" 
  helperText="Texto de ajuda" 
/>
<Input 
  status="success" 
  placeholder="Digite algo..." 
  label="Status Success" 
  helperText="Tudo certo!" 
/>
<Input 
  status="warning" 
  placeholder="Digite algo..." 
  label="Status Warning" 
  helperText="Atenção necessária" 
/>
<Input 
  status="error" 
  placeholder="Digite algo..." 
  label="Status Error" 
  helperText="Erro no campo" 
/>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} status="default" label="Status Default" helperText="Texto de ajuda" />
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
  parameters: {
    docs: {
      source: {
        code: `
<Input 
  startIcon="Search" 
  placeholder="Buscar..." 
  label="Input com ícone no início" 
/>
<Input 
  endIcon="Eye" 
  type="password" 
  placeholder="Digite sua senha..." 
  label="Input com ícone no final" 
/>
<Input 
  startIcon="User" 
  endIcon="Check" 
  status="success" 
  placeholder="Digite seu nome..." 
  label="Input com ícones em ambos" 
  helperText="Usuário válido" 
/>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input
          {...args}
          startIcon='Search'
          endIcon={undefined}
          label="Input com ícone no início"
          placeholder="Buscar..."
        />
      </div>
      <div>
        <Input
          {...args}
          startIcon={undefined}
          endIcon='Eye'
          label="Input com ícone no final"
          type="password"
          placeholder="Digite sua senha..."
        />
      </div>
      <div>
        <Input
          {...args}
          startIcon='User'
          endIcon='Check'
          label="Input com ícones em ambos"
          status="success"
          placeholder="Digite seu nome..."
          helperText="Usuário válido"
        />
      </div>
    </div>
  ),
};

export const States: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Input 
  placeholder="Digite algo..." 
  label="Input normal" 
/>
<Input 
  disabled 
  placeholder="Campo desabilitado..." 
  label="Input desabilitado" 
/>
<Input 
  fullWidth 
  placeholder="Digite algo..." 
  label="Input com largura total" 
/>
<Input 
  required 
  placeholder="Digite algo..." 
  label="Input obrigatório" 
  helperText="Este campo é obrigatório" 
/>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} label="Input normal" placeholder="Digite algo..." />
      </div>
      <div>
        <Input {...args} disabled label="Input desabilitado" placeholder="Campo desabilitado..." />
      </div>
      <div>
        <Input {...args} fullWidth label="Input com largura total" placeholder="Digite algo..." />
      </div>
      <div>
        <Input
          {...args}
          required
          label="Input obrigatório"
          placeholder="Digite algo..."
          helperText="Este campo é obrigatório"
        />
      </div>
    </div>
  ),
};

export const InputTypes: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<Input 
  type="email" 
  placeholder="email@exemplo.com" 
  label="Campo de email" 
/>
<Input 
  type="password" 
  placeholder="Digite sua senha..." 
  label="Campo de senha" 
/>
<Input 
  type="number" 
  placeholder="Digite um número..." 
  label="Campo numérico" 
/>
<Input 
  type="tel" 
  placeholder="(11) 99999-9999" 
  label="Campo de telefone" 
/>
<Input 
  type="url" 
  placeholder="https://exemplo.com" 
  label="Campo de URL" 
/>`,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <Input {...args} type="email" placeholder="email@exemplo.com" label="Campo de email" />
      </div>
      <div>
        <Input {...args} type="password" placeholder="Digite sua senha..." label="Campo de senha" />
      </div>
      <div>
        <Input {...args} type="number" placeholder="Digite um número..." label="Campo numérico" />
      </div>
      <div>
        <Input {...args} type="tel" placeholder="(11) 99999-9999" label="Campo de telefone" />
      </div>
      <div>
        <Input {...args} type="url" placeholder="https://exemplo.com" label="Campo de URL" />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `
<form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  <Input
    label="Nome completo"
    placeholder="Digite seu nome completo..."
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
    placeholder="Crie uma senha segura..."
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
</form>`,
      },
    },
  },
  render: () => (
    <div
      style={{
        width: '400px',
        padding: '24px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#1a1a1a' }}>Formulário de Exemplo</h3>

        <Input label="Nome completo" placeholder="Digite seu nome completo..." startIcon='User' required />

        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          startIcon='Mail'
          status="success"
          helperText="Email válido"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Crie uma senha segura..."
          startIcon='Lock'
          status="error"
          helperText="Senha deve ter pelo menos 8 caracteres"
        />

        <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" startIcon='Phone' />

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button
            type="button"
            style={{
              padding: '12px 24px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
            }}>
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
            }}>
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
    status: 'default',
    disabled: false,
    fullWidth: false,
    label: 'Label do input',
    placeholder: 'Digite algo...',
    helperText: 'Texto de ajuda opcional',
    startIcon: undefined,
    endIcon: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  variant="default"
  size="medium"
  status="default"
  disabled={false}
  fullWidth={false}
  label="Label do input"
  placeholder="Digite algo..."
  helperText="Texto de ajuda opcional"
/>`,
      },
    },
  },
};
