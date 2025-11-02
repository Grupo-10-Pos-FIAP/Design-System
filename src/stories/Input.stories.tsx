import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@components/Input/Input';
import { iconKeys } from '@utils/iconKeys';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de input para coleta de dados do usuário com várias variantes e estados.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'transparent'],
      description: 'Variante visual do input',
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    status: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'error'],
      description: 'Status visual de validação',
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
      table: {
        defaultValue: { summary: 'false' },
      },
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
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'time', 'checkbox', 'radio'],
      description: 'Tipo do input',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    leadingIcon: {
      control: 'select',
      options: [null, ...iconKeys],
      description: 'Ícone no início do input',
    },
    trailingIcon: {
      control: 'select',
      options: [null, ...iconKeys],
      description: 'Ícone no final do input',
    },
    width: {
      control: 'text',
      description: 'Largura customizada do input',
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório',
    },
  },
  args: {
    variant: 'outlined',
    status: 'neutral',
    disabled: false,
    type: 'text',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
    label: 'Input padrão',
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes variantes visuais do input.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input
          variant="outlined"
          placeholder="Digite algo..."
          label="Outlined"
          helperText="Borda visível com fundo transparente"
        />
        <Input variant="filled" placeholder="Digite algo..." label="Filled" helperText="Fundo cinza claro sem borda" />
        <Input
          variant="transparent"
          placeholder="Digite algo..."
          label="Transparent"
          helperText="Totalmente transparente, ideal para overlays"
        />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input
          variant="outlined"
          placeholder="Digite algo..."
          label="Outlined"
          helperText="Borda visível com fundo transparente"
          disabled
        />
        <Input 
          variant="filled" 
          placeholder="Digite algo..." 
          label="Filled" 
          helperText="Fundo cinza claro sem borda" 
          disabled 
        />
        <Input
          variant="transparent"
          placeholder="Digite algo..."
          label="Transparent"
          helperText="Totalmente transparente, ideal para overlays"
          disabled
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Estados visuais para diferentes situações de validação.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input
          status="neutral"
          placeholder="Digite algo..."
          label="Neutral"
          helperText="Estado padrão do campo"
        />
        <Input
          status="success"
          placeholder="Digite algo..."
          label="Success"
          helperText="Campo validado com sucesso"
        />
        <Input
          status="warning"
          placeholder="Digite algo..."
          label="Warning"
          helperText="Atenção necessária neste campo"
        />
        <Input
          status="error"
          placeholder="Digite algo..."
          label="Error"
          helperText="Erro que precisa ser corrigido"
        />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input
          status="neutral"
          placeholder="Digite algo..."
          label="Neutral"
          helperText="Estado padrão do campo"
          disabled
        />
        <Input
          status="success"
          placeholder="Digite algo..."
          label="Success"
          helperText="Campo validado com sucesso"
          disabled
        />
        <Input
          status="warning"
          placeholder="Digite algo..."
          label="Warning"
          helperText="Atenção necessária neste campo"
          disabled
        />
        <Input
          status="error"
          placeholder="Digite algo..."
          label="Error"
          helperText="Erro que precisa ser corrigido"
          disabled
        />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Inputs com ícones leading (início) e trailing (final).',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input
          leadingIcon="Search"
          placeholder="Buscar usuários..."
          label="Search Input"
          helperText="Input com ícone de busca"
        />
        <Input
          trailingIcon="Eye"
          type="password"
          placeholder="Digite sua senha..."
          label="Password Input"
          helperText="Input com ícone para mostrar senha"
        />
        <Input
          leadingIcon="Mail"
          trailingIcon="Check"
          status="success"
          placeholder="email@exemplo.com"
          label="Email Verified"
          helperText="Email verificado com sucesso"
        />
        <Input
          leadingIcon="User"
          trailingIcon="CircleAlert"
          status="error"
          placeholder="Digite seu nome..."
          label="User Input"
          helperText="Nome de usuário inválido"
        />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input
          leadingIcon="Search"
          placeholder="Buscar usuários..."
          label="Search Input"
          helperText="Input com ícone de busca"
          disabled
        />
        <Input
          trailingIcon="Eye"
          type="password"
          placeholder="Digite sua senha..."
          label="Password Input"
          helperText="Input com ícone para mostrar senha"
          disabled
        />
        <Input
          leadingIcon="Mail"
          trailingIcon="Check"
          status="success"
          placeholder="email@exemplo.com"
          label="Email Verified"
          helperText="Email verificado com sucesso"
          disabled
        />
        <Input
          leadingIcon="User"
          trailingIcon="CircleAlert"
          status="error"
          placeholder="Digite seu nome..."
          label="User Input"
          helperText="Nome de usuário inválido"
          disabled
        />
      </div>
    </div>
  ),
};

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes estados interativos do input.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input placeholder="Digite algo..." label="Normal" helperText="Estado padrão e ativo" />
        <Input required placeholder="Campo obrigatório..." label="Required Field" helperText="Este campo é obrigatório" />
        <Input defaultValue="Valor pré-preenchido" label="With Default Value" helperText="Input com valor inicial" />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input placeholder="Digite algo..." label="Normal" helperText="Estado padrão e ativo" disabled />
        <Input disabled placeholder="Campo desabilitado..." label="Disabled" helperText="Campo não interativo" />
        <Input required placeholder="Campo obrigatório..." label="Required Field" helperText="Este campo é obrigatório" disabled />
        <Input defaultValue="Valor pré-preenchido" label="With Default Value" helperText="Input com valor inicial" disabled />
      </div>
    </div>
  ),
};

export const InputTypes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tipos de input para vários cenários de uso.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input type="email" placeholder="email@exemplo.com" label="Email" />
        <Input type="password" placeholder="••••••••" label="Password" />
        <Input type="number" placeholder="0" label="Number" />
        <Input type="tel" placeholder="(11) 99999-9999" label="Telephone" />
        <Input type="url" placeholder="https://exemplo.com" label="URL" />
        <Input type="date" label="Date" />
        <Input type="time" label="Time" />
        <Input type="checkbox" label="Checkbox" />
        <Input type="radio" label="Radio" />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input type="email" placeholder="email@exemplo.com" label="Email" disabled />
        <Input type="password" placeholder="••••••••" label="Password" disabled />
        <Input type="number" placeholder="0" label="Number" disabled />
        <Input type="tel" placeholder="(11) 99999-9999" label="Telephone" disabled />
        <Input type="url" placeholder="https://exemplo.com" label="URL" disabled />
        <Input type="date" label="Date" disabled />
        <Input type="time" label="Time" disabled />
        <Input type="checkbox" label="Checkbox" disabled />
        <Input type="radio" label="Radio" disabled />
      </div>
    </div>
  ),
};

export const Sizing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exemplos de inputs com diferentes larguras.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Coluna Ativo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Ativo</h4>
        <Input placeholder="Largura total..." label="Full Width" helperText="Ocupa 100% do container pai" />
        <Input width={200} placeholder="200px de largura..." label="Custom Width" helperText="Largura fixa de 200px" />
        <Input
          width="50%"
          placeholder="50% de largura..."
          label="Percentage Width"
          helperText="50% da largura do container"
        />
      </div>
      
      {/* Coluna Desabilitado */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <h4 style={{ margin: 0, color: '#1a1a1a', marginBottom: '8px' }}>Desabilitado</h4>
        <Input placeholder="Largura total..." label="Full Width" helperText="Ocupa 100% do container pai" disabled />
        <Input width={200} placeholder="200px de largura..." label="Custom Width" helperText="Largura fixa de 200px" disabled />
        <Input
          width="50%"
          placeholder="50% de largura..."
          label="Percentage Width"
          helperText="50% da largura do container"
          disabled
        />
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em um formulário real com diferentes tipos de campos.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      {/* Formulário Ativo */}
      <div style={{ width: '400px', padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#1a1a1a', fontSize: '20px' }}>Formulário de Cadastro</h3>

          <Input
            label="Nome completo"
            placeholder="Digite seu nome completo..."
            leadingIcon="User"
            required
            helperText="Digite seu nome como no documento"
          />

          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            leadingIcon="Mail"
            status="success"
            helperText="Email válido e disponível"
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Crie uma senha segura..."
            leadingIcon="Lock"
            status="error"
            helperText="A senha deve ter pelo menos 8 caracteres"
          />

          <Input label="Data de Nascimento" type="date" leadingIcon="Calendar" />

          <Input
            label="Telefone"
            type="tel"
            placeholder="(11) 99999-9999"
            leadingIcon="Phone"
            helperText="Com DDD e número"
          />

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              style={{
                padding: '12px 24px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                background: 'white',
                color: '#666',
                cursor: 'pointer',
                fontSize: '14px',
              }}>
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '6px',
                background: '#1c6ea4',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
              }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>

      {/* Formulário Desabilitado */}
      <div style={{ width: '400px', padding: '24px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#666', fontSize: '20px' }}>Formulário Desabilitado</h3>

          <Input
            label="Nome completo"
            placeholder="Digite seu nome completo..."
            leadingIcon="User"
            required
            helperText="Digite seu nome como no documento"
            disabled
          />

          <Input
            label="Email"
            type="email"
            placeholder="seu@email.com"
            leadingIcon="Mail"
            status="success"
            helperText="Email válido e disponível"
            disabled
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Crie uma senha segura..."
            leadingIcon="Lock"
            status="error"
            helperText="A senha deve ter pelo menos 8 caracteres"
            disabled
          />

          <Input label="Data de Nascimento" type="date" leadingIcon="Calendar" disabled />

          <Input
            label="Telefone"
            type="tel"
            placeholder="(11) 99999-9999"
            leadingIcon="Phone"
            helperText="Com DDD e número"
            disabled
          />

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              style={{
                padding: '12px 24px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                background: '#f5f5f5',
                color: '#999',
                cursor: 'not-allowed',
                fontSize: '14px',
              }}
              disabled>
              Cancelar
            </button>
            <button
              type="button"
              style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '6px',
                background: '#ccc',
                color: '#999',
                cursor: 'not-allowed',
                fontSize: '14px',
                fontWeight: '500',
              }}
              disabled>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
};