import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@components/Card/Card';
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { Text } from '@components/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'flat'],
    },
    color: {
      control: { type: 'select' },
      options: ['base', 'gradient'],
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
    variant: 'elevated',
    color: 'base',
    closable: false,
    children: <p>Este é um card com a variante "elevated", o padrão.</p>,
  },
};

export const WithSections: Story = {
  args: {
    title: 'Card com Seções',
    color: 'base',
    children: (
      <>
        <Card.Section>
          <Text>Seção 1: conteúdo introdutório.</Text>
        </Card.Section>
        <Card.Section>
          <Text>Seção 2: informações adicionais.</Text>
        </Card.Section>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    title: 'Card Outlined',
    variant: 'outlined',
    color: 'base',
    children: <p>Este card usa o estilo 'outlined'.</p>,
  },
};

export const Flat: Story = {
  args: {
    title: 'Card Flat',
    variant: 'flat',
    color: 'base',
    children: <p>Este card usa o estilo 'flat'.</p>,
  },
};

export const Closable: Story = {
  args: {
    title: 'Card Fechável',
    color: 'base',
    closable: true,
    children: <p>Este card pode ser fechado clicando no botão "X".</p>,
  },
};

export const CardWithSectionsAndClose: Story = {
  args: {
    title: 'Card com seções e fechamento',
    color: 'base',
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
    color: 'base',
    className: 'meu-card-customizado',
    children: <p>Este card possui uma classe extra.</p>,
  },
};

export const FormCard: Story = {
  args: {
    title: 'Formulário de Contato',
    color: 'base',
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
    color: 'base',
    children: (
      <div style={{ padding: '16px', width: '350px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input label="Chave PIX ou dados da conta" placeholder="Digite a chave" />

        <Dropdown items={transferValues} placeholder="Selecione o valor da transferência" label="teste" />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="primary">Transferir</Button>
        </div>
      </div>
    ),
  },
};

// NOVAS STORIES PARA A PROPRIEDADE color
export const GradientCard: Story = {
  args: {
    title: 'Card com Gradiente',
    color: 'gradient',
    children: (
      <p>Este card usa a variante de cores com gradiente. Perfeito para destacar conteúdos especiais!</p>
    ),
  },
};

export const GradientOutlined: Story = {
  args: {
    title: 'Card Outlined com Gradiente',
    variant: 'outlined',
    color: 'gradient',
    children: <p>Combinação de outlined com gradiente para um visual moderno.</p>,
  },
};

export const GradientWithSections: Story = {
  args: {
    title: 'Card com Gradiente e Seções',
    color: 'gradient',
    children: (
      <>
        <Card.Section>
          <Text>Seção 1: conteúdo com fundo gradiente.</Text>
        </Card.Section>
        <Card.Section>
          <Text>Seção 2: mais informações no estilo gradiente.</Text>
        </Card.Section>
      </>
    ),
  },
};