import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { NavigationDrawer } from '@components/NavigationDrawer/NavigationDrawer';
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import { Text } from '@components/Text/Text';

const meta: Meta = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default (com controle interno)',
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = useState(false);

return (
  <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Button onClick={() => setOpen(true)}>Abrir menu</Button>

    <NavigationDrawer
      open={open}
      onClose={() => setOpen(false)}
      position="left"
      size="medium"
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
        },
        {
          label: 'Configurações',
          icon: 'Settings',
          href: '/configuracoes',
        },
      ]}
    />
  </div>
);`
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Button onClick={() => setOpen(true)}>Abrir menu</Button>

        <NavigationDrawer
          open={open}
          onClose={() => setOpen(false)}
          position="left"
          size="medium"
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
  parameters: {
    docs: {
      source: {
        code: `
<NavigationDrawer
  open={true}
  position="left"
  size="medium"
  showCloseButton={true}
  closeOnOverlayClick={true}
  header={<h3 style={{ margin: 0 }}>Menu Controlado</h3>}
  footer={
    <div style={{ padding: '1rem 0', textAlign: 'center' }}>
      <small>Design System © 2025</small>
    </div>
  }
  items={[
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
  ]}
/>`
      }
    }
  },
  args: {
    open: true,
    position: 'left',
    size: 'medium',
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

export const WithCustomHeaderAndFooter: StoryObj = {
  name: 'Com Header e Footer Customizados',
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = useState(false);

const CustomHeader = () => (
  <NavigationDrawer.Header className="custom-header">
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icon name="Store" size="medium" />
      <Text variant="h3" className="font-bold">Minha Loja</Text>
    </div>
  </NavigationDrawer.Header>
);

const CustomFooter = () => (
  <NavigationDrawer.Footer className="custom-footer">
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Text variant="small" color="gray-700">
        Sessão ativa
      </Text>
    </div>
  </NavigationDrawer.Footer>
);

return (
  <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Button onClick={() => setOpen(true)}>Abrir Menu Customizado</Button>

    <NavigationDrawer
      open={open}
      onClose={() => setOpen(false)}
      position="left"
      size="medium"
      showCloseButton
      closeOnOverlayClick
      header={<CustomHeader />}
      footer={<CustomFooter />}
      items={[
        {
          label: 'Início',
          icon: 'House',
          active: true,
          onClick: () => console.log('Navegar para início'),
        },
        {
          label: 'Produtos',
          icon: 'Package',
          onClick: () => console.log('Navegar para produtos'),
        },
        {
          label: 'Vendas',
          icon: 'ShoppingCart',
          onClick: () => console.log('Navegar para vendas'),
        },
        {
          label: 'Clientes',
          icon: 'Users',
          onClick: () => console.log('Navegar para clientes'),
        },
      ]}
    />
  </div>
);`
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);

    const CustomHeader = () => (
      <NavigationDrawer.Header className="custom-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon name="Store" size="medium" />
          <Text variant="h3" className="font-bold">Minha Loja</Text>
        </div>
      </NavigationDrawer.Header>
    );

    const CustomFooter = () => (
      <NavigationDrawer.Footer className="custom-footer">
        <div style={{ textAlign: 'center', width: '100%' }}>
          <Text variant="small" color="gray-700">
            Sessão ativa
          </Text>
        </div>
      </NavigationDrawer.Footer>
    );

    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Button onClick={() => setOpen(true)}>Abrir Menu Customizado</Button>

        <NavigationDrawer
          open={open}
          onClose={() => setOpen(false)}
          position="left"
          size="medium"
          showCloseButton
          closeOnOverlayClick
          header={<CustomHeader />}
          footer={<CustomFooter />}
          items={[
            {
              label: 'Início',
              icon: 'House',
              active: true,
              onClick: () => console.log('Navegar para início'),
            },
            {
              label: 'Produtos',
              icon: 'Package',
              onClick: () => console.log('Navegar para produtos'),
            },
            {
              label: 'Vendas',
              icon: 'ShoppingCart',
              onClick: () => console.log('Navegar para vendas'),
            },
            {
              label: 'Clientes',
              icon: 'Users',
              onClick: () => console.log('Navegar para clientes'),
            },
          ]}
        />
      </div>
    );
  },
};

export const RightPosition: StoryObj = {
  name: 'Posição à Direita',
  parameters: {
    docs: {
      source: {
        code: `
const [open, setOpen] = useState(false);

return (
  <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Button onClick={() => setOpen(true)}>Abrir Menu à Direita</Button>

    <NavigationDrawer
      open={open}
      onClose={() => setOpen(false)}
      position="right"
      size="medium"
      showCloseButton
      closeOnOverlayClick
      header={<h3 style={{ margin: 0 }}>Menu Lateral Direito</h3>}
      items={[
        {
          label: 'Configurações',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Ajuda',
          icon: 'CircleQuestionMark',
          onClick: () => {},
        },
        {
          label: 'Sair',
          icon: 'LogOut',
          onClick: () => {},
        },
      ]}
    />
  </div>
);`
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Button onClick={() => setOpen(true)}>Abrir Menu à Direita</Button>

        <NavigationDrawer
          open={open}
          onClose={() => setOpen(false)}
          position="right"
          size="medium"
          showCloseButton
          closeOnOverlayClick
          header={<h3 style={{ margin: 0 }}>Menu Lateral Direito</h3>}
          items={[
            {
              label: 'Configurações',
              icon: 'Settings',
              onClick: () => {},
            },
            {
              label: 'Ajuda',
              icon: 'CircleQuestionMark',
              onClick: () => {},
            },
            {
              label: 'Sair',
              icon: 'LogOut',
              onClick: () => {},
            },
          ]}
        />
      </div>
    );
  },
};