import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const Default: Story = {
  args: {
    title: 'Título do Card',
    children: <p>Este é um card padrão. Você pode colocar qualquer conteúdo aqui.</p>,
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
        <p>Este card pode ser fechado clicando no botão "X".</p>,
        <Card.Section>
          <h4>Dados Pessoais</h4>
          <p> Nome:</p>
          <p>Telefone:</p>
        </Card.Section>
        <Card.Section>
          <h1>Teste</h1>
          <strong>Tag strong aplicada sem estilos</strong>
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
