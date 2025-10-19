import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@components/Card/Card';
import { Button } from '@components/Button/Button';
import Input from '@components/Input/Input';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { Icon } from '@components/Icon/Icon';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['elevated', 'outlined', 'flat'],
    },
    title: { control: 'text' },
    closable: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    title: 'Título do Card (Elevated)',
    children: <p>Este é um card com a variante "elevated", o padrão.</p>,
  },
};

export const WithSections: Story = {
  args: {
    title: 'Card com Seções',
    children: (
      <>
        <Card.Section>
          <p>Seção 1: conteúdo introdutório.</p>
        </Card.Section>
        <Card.Section>
          <p>Seção 2: informações adicionais.</p>
        </Card.Section>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    title: 'Card Outlined',
    variant: 'outlined',
    children: <p>Este card usa o estilo 'outlined'.</p>,
  },
};

export const Flat: Story = {
  args: {
    title: 'Card Flat',
    variant: 'flat',
    children: <p>Este card usa o estilo 'flat'.</p>,
  },
};

export const Closable: Story = {
  args: {
    title: 'Card Fechável',
    closable: true,
    children: <p>Este card pode ser fechado clicando no botão "X".</p>,
  },
};

export const CardWithSectionsAndClose: Story = {
  args: {
    title: 'Card com seções e fechamento',
    closable: true,
    children: (
      <>
        <p>Este card pode ser fechado clicando no botão "X".</p>
        <Card.Section>
          <h4>Dados Pessoais</h4>
          <p> Nome: Fernanda</p>
          <p>Telefone: (11) 988997766</p>
        </Card.Section>
        <Card.Section>
          <h1>Teste</h1>
          <strong>Teste de sessão com tag strong sem estilos aplicados</strong>
        </Card.Section>
      </>
    ),
  },
};

export const CustomClassName: Story = {
  args: {
    title: 'Card com Classe Personalizada',
    className: 'meu-card-customizado',
    children: <p>Este card possui uma classe extra.</p>,
  },
};

export const FormCard: Story = {
  args: {
    title: 'Formulário de Contato',
    children: (
      <div style={{ padding: '16px', width: '300px' }}>
        <Card.Section>
          <Input label="Nome" placeholder="Digite seu nome" />
        </Card.Section>
        <Card.Section>
          <Input label="Email" placeholder="Digite seu email" type="email" />
        </Card.Section>
        <Card.Section>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary">Enviar</Button>
          </div>
        </Card.Section>
      </div>
    ),
  },
};

const transferValues = [
  { label: 'R$ 50,00' },
  { label: 'R$ 100,00' },
  { label: 'R$ 200,00' },
  { label: 'Outro valor', disabled: true },
];

export const TransferCard: Story = {
  args: {
    title: 'Fazer Transferência',
    children: (
      <div style={{ padding: '16px', width: '350px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="Chave PIX ou dados da conta" placeholder="Digite a chave" />

        <Dropdown
          items={transferValues}
          trigger={
            <Button variant="secondary" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <span>Valor da Transferência</span>
              <Icon name="ChevronDown" />
            </Button>
          }
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="primary">Transferir</Button>
        </div>
      </div>
    ),
  },
};
