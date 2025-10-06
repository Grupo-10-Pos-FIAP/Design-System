import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@components/Dialog/Dialog';
import { Button } from '@components/Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          O **Dialog** é baseado no Radix UI e permite criar modais e drawers.  
          Ele é responsivo, flexível e suporta:
          - Tamanhos: sm | md | lg | xl
          - Posições: center | top | bottom | left | right
          - Alinhamento do conteúdo interno: start | center | end
          - Overlay personalizável com opacidade
          - Botão de fechar opcional
        `,
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right'],
      description: 'Posição do Dialog na tela',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do Dialog',
    },
    contentAlign: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alinhamento interno do conteúdo',
    },
    overlay: { control: 'boolean', description: 'Exibir overlay atrás do Dialog' },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'Opacidade do overlay',
    },
    closeOnOverlayClick: { control: 'boolean', description: 'Fecha o Dialog ao clicar no overlay' },
    showCloseButton: { control: 'boolean', description: 'Exibe o botão de fechar' },
    width: { control: 'text', description: 'Largura customizada do Dialog' },
    maxWidth: { control: 'text', description: 'Largura máxima do Dialog' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogDemo = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="sm">
        Abrir Dialog
      </Button>

      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader>
          <h2>{args.title}</h2>
        </DialogHeader>
        <DialogBody>
          <p>Este é um exemplo de conteúdo do Dialog.</p>
          <p>Você pode adicionar qualquer componente aqui.</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={() => setIsOpen(false)} size="sm">
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    position: 'center',
    size: 'md',
    contentAlign: 'center',
    overlay: true,
    overlayOpacity: 0.25,
    closeOnOverlayClick: true,
    showCloseButton: true,
    title: 'Dialog Example',
    description: 'Descrição para leitores de tela',
  },
  parameters: {
    docs: { storyDescription: 'Dialog padrão, centralizado com tamanho médio.' },
  },
};

export const CustomContent: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Dialog com Conteúdo Personalizado',
    children: (
      <>
        <DialogHeader>
          <h3>Formulário de Exemplo</h3>
        </DialogHeader>
        <DialogBody>
          <input placeholder="Nome" />
          <textarea placeholder="Mensagem" />
        </DialogBody>
        <DialogFooter>
          <Button>Enviar</Button>
        </DialogFooter>
      </>
    ),
  },
};

export const TopDialog: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: { ...Default.args, position: 'top', title: 'Dialog Top' },
  parameters: { docs: { storyDescription: 'Dialog alinhado no topo da tela.' } },
};

export const BottomDialog: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: { ...Default.args, position: 'bottom', title: 'Dialog Bottom' },
  parameters: { docs: { storyDescription: 'Dialog alinhado na parte inferior da tela.' } },
};

export const LargeDialog: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: { ...Default.args, size: 'lg', title: 'Large Dialog' },
  parameters: { docs: { storyDescription: 'Dialog grande, ótimo para conteúdo extenso.' } },
};

export const StartAligned: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: { ...Default.args, contentAlign: 'start', title: 'Start Aligned' },
  parameters: { docs: { storyDescription: 'Conteúdo interno alinhado ao início.' } },
};

export const EndAligned: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: { ...Default.args, contentAlign: 'end', title: 'End Aligned' },
  parameters: { docs: { storyDescription: 'Conteúdo interno alinhado ao final.' } },
};

export const FullWidth: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    size: 'xl',
    width: '100%',
    maxWidth: '1200px',
    title: 'Dialog Full Width',
  },
  parameters: { docs: { storyDescription: 'Dialog ocupando largura máxima customizada.' } },
};

export const NoOverlay: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    overlay: false,
    overlayOpacity: 0,
    title: 'Dialog sem Overlay',
  },
  parameters: { docs: { storyDescription: 'Dialog sem overlay, ideal para casos de aviso discreto.' } },
};

export const NoCloseOnOverlayClick: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    closeOnOverlayClick: false,
    title: 'Overlay Não Fecha',
  },
};

export const ContentAlignment: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    contentAlign: 'start',
    title: 'Alinhamento de conteúdo',
  },
  parameters: { docs: { storyDescription: 'Dialog com alinhamento interno do conteúdo em start/center/end.' } },
};

export const FooterAlignment: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    footerAlign: 'center',
    title: 'Footer Centralizado',
  },
  parameters: { docs: { storyDescription: 'Testa alinhamento do footer: start | center | end' } },
};

export const FullScreenResponsive: Story = {
  render: (args) => <DialogDemo {...args} />,
  args: {
    ...Default.args,
    fullScreenBreakpoint: 1024,
    size: 'xl',
    title: 'Dialog Responsivo',
  },
  parameters: { docs: { storyDescription: 'Dialog ocupa 100% da tela quando largura fullScreenBreakpoint' } },
};
