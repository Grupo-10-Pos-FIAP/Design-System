// src/stories/Dialog.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog/Dialog';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Dialog Responsivo

O componente **Dialog** adapta seu tamanho de acordo com a largura da tela:

- **Mobile** (até 480px): ocupa quase toda a largura da tela.
- **Tablet** (481px a 1023px): largura máxima de 500px.
- **Desktop** (1024px ou mais): largura máxima de 500px, centralizado.

O fundo aplica um efeito de **blur**, mantendo o conteúdo atrás levemente visível.

O Dialog possui:
- Cabeçalho com título e botão de fechar (X).
- Área de conteúdo responsiva.
- Opções clicáveis que se adaptam à largura disponível.
        `,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '768px' },
          type: 'desktop',
        },
      },
      defaultViewport: 'responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleSelect = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    return (
      <>
        <Button onClick={handleOpen}>Abrir Dialog</Button>
        <Dialog
          title="Você concorda com os termos?"
          isOpen={isOpen}
          onClose={handleClose}
          options={['Sim', 'Não']}
          onSelect={handleSelect}
        >
          <p>Escolha uma opção abaixo:</p>
        </Dialog>

        {selectedOption && <p style={{ marginTop: '16px' }}>Você selecionou: {selectedOption}</p>}
      </>
    );
  },
};
