import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Button } from '../components/Button/Button';
import { IconButton } from '../components/IconButton/IconButton';
import { Icon } from '../components/Icon/Icon';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: {
      table: { disable: true },
    },
    items: {
      control: false,
      description: 'Items array from menu. Each item can contain `label`, `icon`, `onClick` and `disabled`.',
      table: {
        type: { summary: 'DropdownItem[]' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class for additional customization.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button variant="secondary">Abrir Dropdown</Button>,
    items: [
      { label: 'Perfil', onClick: () => {} },
      { label: 'Configurações', onClick: () => {} },
      { label: 'Sair', onClick: () => {} },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="secondary">Ações</Button>,
    items: [
      { label: 'Editar', icon: <Icon name="FilePenLine" size="small" />, onClick: () => {} },
      { label: 'Excluir', icon: <Icon name="Trash2" size="small" />, onClick: () => {} },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    trigger: <Button variant="secondary">Opções</Button>,
    items: [
      { label: 'Compartilhar', onClick: () => {} },
      { label: 'Copiar Link', onClick: () => {} },
      { label: 'Denunciar', disabled: true, icon: <Icon name="Ban" size="small" /> },
    ],
  },
};

export const WithIconButtonTrigger: Story = {
  args: {
    trigger: <IconButton icon="ArrowDown" aria-label="" />,
    items: [
      { label: 'Ação 1', onClick: () => {} },
      { label: 'Ação 2', onClick: () => {} },
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    ...Default.args,
    trigger: <Button variant="outline">Dropdown Customizado</Button>,
    className: 'meu-dropdown-customizado',
  },
};
