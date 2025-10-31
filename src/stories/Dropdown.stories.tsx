import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '@components/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    items: {
      control: false,
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    width: {
      control: 'text',
      description: 'Largura do dropdown (px, %, auto, etc.)'
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Status visual do dropdown'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda abaixo do dropdown'
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const SelectTransactionType: Story = {
  args: {
    placeholder: "Selecione o tipo de transação",
    items: [
      { 
        label: 'Transferência', 
        value: 'transfer', 
        icon: 'ArrowLeftRight',
        onClick: () => console.log('Transferência selecionada') 
      },
      { 
        label: 'Pagamento', 
        value: 'payment', 
        icon: 'CreditCard',
        onClick: () => console.log('Pagamento selecionado') 
      },
      { 
        label: 'Depósito', 
        value: 'deposit', 
        icon: 'ArrowDownToLine',
        onClick: () => console.log('Depósito selecionado') 
      },
      { 
        label: 'Saque', 
        value: 'withdraw', 
        icon: 'ArrowUpFromLine',
        onClick: () => console.log('Saque selecionado') 
      },
      { 
        label: 'Investimento', 
        value: 'investment', 
        icon: 'TrendingUp',
        onClick: () => console.log('Investimento selecionado') 
      },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    label: "Tipo de Transação",
    placeholder: "Selecione o tipo de transação",
    items: [
      { 
        label: 'Transferência', 
        value: 'transfer', 
        icon: 'ArrowLeftRight',
      },
      { 
        label: 'Pagamento', 
        value: 'payment', 
        icon: 'CreditCard',
      },
      { 
        label: 'Depósito', 
        value: 'deposit', 
        icon: 'ArrowDownToLine',
      },
    ],
  },
};

export const WithStatusAndHelper: Story = {
  args: {
    label: "Status do Pedido",
    placeholder: "Selecione o status",
    status: 'success',
    helperText: "Status atualizado com sucesso!",
    items: [
      { 
        label: 'Pendente', 
        value: 'pending', 
        icon: 'Clock',
      },
      { 
        label: 'Processando', 
        value: 'processing', 
        icon: 'RefreshCw',
      },
      { 
        label: 'Concluído', 
        value: 'completed', 
        icon: 'CircleCheck',
      },
      { 
        label: 'Cancelado', 
        value: 'cancelled', 
        icon: 'CircleX',
      },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: "Categoria",
    placeholder: "Selecione uma categoria",
    status: 'error',
    helperText: "Este campo é obrigatório",
    items: [
      { 
        label: 'Eletrônicos', 
        value: 'electronics', 
        icon: 'Smartphone',
      },
      { 
        label: 'Roupas', 
        value: 'clothes', 
        icon: 'Shirt',
      },
      { 
        label: 'Livros', 
        value: 'books', 
        icon: 'Book',
      },
    ],
  },
};

export const WithWarning: Story = {
  args: {
    label: "Nível de Prioridade",
    placeholder: "Selecione a prioridade",
    status: 'warning',
    helperText: "Alerta: prioridade alta selecionada",
    items: [
      { 
        label: 'Baixa', 
        value: 'low', 
        icon: 'ArrowDown',
      },
      { 
        label: 'Média', 
        value: 'medium', 
        icon: 'Minus',
      },
      { 
        label: 'Alta', 
        value: 'high', 
        icon: 'ArrowUp',
      },
      { 
        label: 'Crítica', 
        value: 'critical', 
        icon: 'TriangleAlert',
      },
    ],
  },
};

export const WithCustomWidth: Story = {
  args: {
    label: "Dropdown com Largura Customizada",
    placeholder: "Selecione uma opção",
    width: "400px",
    items: [
      { 
        label: 'Opção com texto muito longo que deve caber dentro do dropdown', 
        value: 'long', 
        icon: 'FileText',
      },
      { 
        label: 'Outra opção', 
        value: 'other', 
        icon: 'Folder',
      },
      { 
        label: 'Mais uma opção', 
        value: 'another', 
        icon: 'Archive',
      },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    label: "Dropdown com Largura Total",
    placeholder: "Selecione uma opção",
    width: "100%",
    items: [
      { 
        label: 'Opção 1', 
        value: 'option1', 
        icon: 'Check',
      },
      { 
        label: 'Opção 2', 
        value: 'option2', 
        icon: 'Check',
      },
      { 
        label: 'Opção 3', 
        value: 'option3', 
        icon: 'Check',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithIcons: Story = {
  args: {
    placeholder: "Selecione uma ação",
    items: [
      { 
        label: 'Editar', 
        value: 'edit',
        icon: 'Pencil', 
        onClick: () => console.log('Editar clicado') 
      },
      { 
        label: 'Excluir', 
        value: 'delete',
        icon: 'Trash2', 
        onClick: () => console.log('Excluir clicado') 
      },
      { 
        label: 'Compartilhar', 
        value: 'share',
        icon: 'Share2', 
        onClick: () => console.log('Compartilhar clicado') 
      },
      { 
        label: 'Download', 
        value: 'download',
        icon: 'Download', 
        onClick: () => console.log('Download clicado') 
      },
      { 
        label: 'Imprimir', 
        value: 'print',
        icon: 'Printer', 
        onClick: () => console.log('Imprimir clicado') 
      },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    placeholder: "Escolha uma opção",
    items: [
      { 
        label: 'Opção Disponível', 
        value: 'available', 
        icon: 'CircleCheck',
        onClick: () => console.log('Opção disponível') 
      },
      { 
        label: 'Opção Desabilitada', 
        value: 'disabled',
        icon: 'CircleX',
        disabled: true,
      },
      { 
        label: 'Outra Opção', 
        value: 'other', 
        icon: 'Circle',
        onClick: () => console.log('Outra opção') 
      },
    ],
  },
};


export const FileActions: Story = {
  args: {
    placeholder: "Ações do arquivo",
    items: [
      { 
        label: 'Abrir', 
        value: 'open',
        icon: 'FolderOpen', 
        onClick: () => console.log('Abrir clicado') 
      },
      { 
        label: 'Salvar', 
        value: 'save',
        icon: 'Save', 
        onClick: () => console.log('Salvar clicado') 
      },
      { 
        label: 'Renomear', 
        value: 'rename',
        icon: 'Pencil', 
        onClick: () => console.log('Renomear clicado') 
      },
      { label: 'divider' },
      { 
        label: 'Exportar', 
        value: 'export',
        icon: 'Download', 
        onClick: () => console.log('Exportar clicado') 
      },
    ],
  },
};

export const StatusVariants = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Dropdown status="default" helperText="Texto de ajuda padrão" {...props} />
<Dropdown status="success" helperText="Operação realizada com sucesso" {...props} />
<Dropdown status="warning" helperText="Atenção: ação necessária" {...props} />
<Dropdown status="error" helperText="Erro: campo obrigatório" {...props} />`
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Variações de Status</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Status: Default</strong>
            <Dropdown 
              placeholder="Dropdown padrão"
              helperText="Texto de ajuda padrão"
              items={[
                { label: 'Opção 1', value: '1', icon: 'Check' },
                { label: 'Opção 2', value: '2', icon: 'Check' },
              ]}
            />
          </div>
          
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Status: Success</strong>
            <Dropdown 
              placeholder="Dropdown de sucesso"
              status="success"
              helperText="Operação realizada com sucesso"
              items={[
                { label: 'Opção 1', value: '1', icon: 'Check' },
                { label: 'Opção 2', value: '2', icon: 'Check' },
              ]}
            />
          </div>
          
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Status: Warning</strong>
            <Dropdown 
              placeholder="Dropdown de alerta"
              status="warning"
              helperText="Atenção: ação necessária"
              items={[
                { label: 'Opção 1', value: '1', icon: 'Check' },
                { label: 'Opção 2', value: '2', icon: 'Check' },
              ]}
            />
          </div>
          
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Status: Error</strong>
            <Dropdown 
              placeholder="Dropdown de erro"
              status="error"
              helperText="Erro: campo obrigatório"
              items={[
                { label: 'Opção 1', value: '1', icon: 'Check' },
                { label: 'Opção 2', value: '2', icon: 'Check' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WidthVariants = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: `
<Dropdown width="200px" {...props} />
<Dropdown width="300px" {...props} />
<Dropdown width="100%" {...props} />
<Dropdown width="auto" {...props} />`
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Variações de Largura</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Largura 200px</strong>
            <Dropdown 
              width="200px"
              placeholder="Dropdown estreito"
              items={[
                { label: 'Opção 1', value: '1', icon: 'Check' },
                { label: 'Opção 2', value: '2', icon: 'Check' },
              ]}
            />
          </div>
          
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Largura 300px</strong>
            <Dropdown 
              width="300px"
              placeholder="Dropdown médio"
              items={[
                { label: 'Opção com texto mais longo', value: '1', icon: 'FileText' },
                { label: 'Outra opção', value: '2', icon: 'Folder' },
              ]}
            />
          </div>
          
          <div>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>Largura 100%</strong>
            <div style={{ width: '400px', border: '1px solid #e0e0e0', padding: '16px', borderRadius: '8px' }}>
              <Dropdown 
                width="100%"
                placeholder="Dropdown que preenche o container"
                items={[
                  { label: 'Opção 1', value: '1', icon: 'Check' },
                  { label: 'Opção 2', value: '2', icon: 'Check' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};