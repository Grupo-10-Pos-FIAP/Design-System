import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { Icon } from '@components/Icon/Icon';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: {
      table: { disable: true },
    },
    items: {
      control: false,
    },
    placeholder: {
      control: 'text',
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
        icon: <Icon name="ArrowLeftRight" size="small" />,
        onClick: () => console.log('Transferência selecionada') 
      },
      { 
        label: 'Pagamento', 
        value: 'payment', 
        icon: <Icon name="CreditCard" size="small" />,
        onClick: () => console.log('Pagamento selecionado') 
      },
      { 
        label: 'Depósito', 
        value: 'deposit', 
        icon: <Icon name="ArrowDownToLine" size="small" />,
        onClick: () => console.log('Depósito selecionado') 
      },
      { 
        label: 'Saque', 
        value: 'withdraw', 
        icon: <Icon name="ArrowUpFromLine" size="small" />,
        onClick: () => console.log('Saque selecionado') 
      },
      { 
        label: 'Investimento', 
        value: 'investment', 
        icon: <Icon name="TrendingUp" size="small" />,
        onClick: () => console.log('Investimento selecionado') 
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: "Selecione uma ação",
    items: [
      { 
        label: 'Editar', 
        value: 'edit',
        icon: <Icon name="Pencil" size="small" />, 
        onClick: () => console.log('Editar clicado') 
      },
      { 
        label: 'Excluir', 
        value: 'delete',
        icon: <Icon name="Trash2" size="small" />, 
        onClick: () => console.log('Excluir clicado') 
      },
      { 
        label: 'Compartilhar', 
        value: 'share',
        icon: <Icon name="Share2" size="small" />, 
        onClick: () => console.log('Compartilhar clicado') 
      },
      { 
        label: 'Download', 
        value: 'download',
        icon: <Icon name="Download" size="small" />, 
        onClick: () => console.log('Download clicado') 
      },
      { 
        label: 'Imprimir', 
        value: 'print',
        icon: <Icon name="Printer" size="small" />, 
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
        icon: <Icon name="CircleCheck" size="small" />,
        onClick: () => console.log('Opção disponível') 
      },
      { 
        label: 'Opção Desabilitada', 
        value: 'disabled',
        icon: <Icon name="CircleX" size="small" />,
        disabled: true,
      },
      { 
        label: 'Outra Opção', 
        value: 'other', 
        icon: <Icon name="Circle" size="small" />,
        onClick: () => console.log('Outra opção') 
      },
    ],
  },
};

export const UserMenu: Story = {
  args: {
    placeholder: "Menu do usuário",
    items: [
      { 
        label: 'Meu Perfil', 
        value: 'profile',
        icon: <Icon name="User" size="small" />, 
        onClick: () => console.log('Perfil clicado') 
      },
      { 
        label: 'Configurações', 
        value: 'settings',
        icon: <Icon name="Settings" size="small" />, 
        onClick: () => console.log('Configurações clicado') 
      },
      { label: 'divider' },
      { 
        label: 'Sair', 
        value: 'logout',
        icon: <Icon name="LogOut" size="small" />, 
        onClick: () => console.log('Sair clicado') 
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
        icon: <Icon name="FolderOpen" size="small" />, 
        onClick: () => console.log('Abrir clicado') 
      },
      { 
        label: 'Salvar', 
        value: 'save',
        icon: <Icon name="Save" size="small" />, 
        onClick: () => console.log('Salvar clicado') 
      },
      { 
        label: 'Renomear', 
        value: 'rename',
        icon: <Icon name="Pencil" size="small" />, 
        onClick: () => console.log('Renomear clicado') 
      },
      { label: 'divider' },
      { 
        label: 'Exportar', 
        value: 'export',
        icon: <Icon name="Download" size="small" />, 
        onClick: () => console.log('Exportar clicado') 
      },
    ],
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <button className="dropdown-default-trigger" style={{ minWidth: '250px' }}>
        <Icon name="Menu" size="small" />
        <span className="dropdown-trigger-text">Menu personalizado</span>
        <Icon name="ChevronDown" size="small" className="dropdown-chevron" />
      </button>
    ),
    items: [
      { 
        label: 'Item 1', 
        value: 'item1', 
        icon: <Icon name="House" size="small" />,
        onClick: () => console.log('Item 1') 
      },
      { 
        label: 'Item 2', 
        value: 'item2', 
        icon: <Icon name="Star" size="small" />,
        onClick: () => console.log('Item 2') 
      },
      { 
        label: 'Item 3', 
        value: 'item3', 
        icon: <Icon name="Heart" size="small" />,
        onClick: () => console.log('Item 3') 
      },
    ],
  },
};