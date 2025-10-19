import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { NavigationDrawer } from '@components/NavigationDrawer/NavigationDrawer';
import { Button } from '@components/Button/Button';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default (com controle interno)',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)}>Abrir menu</Button>

        <NavigationDrawer
          open={open}
          onClose={() => setOpen(false)}
          position="left"
          size="md"
          showCloseButton
          closeOnOverlayClick
          header={<h3 style={{ margin: 0 }}>Menu default</h3>}
          footer={
            <div style={{ padding: '0.5rem 0', textAlign: 'center' }}>
              <small>v1.0.0</small>
            </div>
          }
          items={[
            {
              label: 'Início',
              icon: 'House',
              onClick: () => {},
            },
            {
              label: 'Financeiro',
              icon: 'Banknote',
              onClick: () => {},
              children: [
                {
                  label: 'Resumo',
                  onClick: () => {},
                },
                { label: 'Relatórios', href: '/financeiro/relatorios' },
              ],
            },
            {
              label: 'Configurações',
              icon: 'Settings',
              href: '/configuracoes',
            },
          ]}
        />
      </div>
    );
  },
};

export const Playground: StoryObj<typeof NavigationDrawer> = {
  name: 'Playground (controlado via args)',
  args: {
    open: true,
    position: 'left',
    size: 'md',
    showCloseButton: true,
    closeOnOverlayClick: true,
    header: <h3 style={{ margin: 0 }}>Menu Controlado</h3>,
    footer: (
      <div style={{ padding: '1rem 0', textAlign: 'center' }}>
        <small>Design System © 2025</small>
      </div>
    ),
    items: [
      {
        label: 'Dashboard',
        icon: 'LayoutDashboard',
        href: '/dashboard',
      },
      {
        label: 'Financeiro',
        icon: 'Banknote',
        children: [
          { label: 'Resumo', onClick: () => {}, href: '/financeiro/resumo' },
          { label: 'Relatórios', onClick: () => {}, href: '/financeiro/relatorios' },
        ],
      },
      {
        label: 'Perfil',
        icon: 'Users',
        children: [
          { label: 'Investimentos', href: '/perfil/investimentos', onClick: () => {} },
          { label: 'Caixinha', href: '/perfil/caixinha', onClick: () => {} },
        ],
      },
    ],
  },
};
