// Dropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  Dropdown  from "../components/Dropdown/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "Tamanho do Dropdown",
    },
    label: { control: "text" },
    options: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// História padrão
export const Default: Story = {
  args: {
    label: "Escolha uma opção",
    size: "medium",
    options: ["Opção 1", "Opção 2", "Opção 3"],
  },
};

// Variações de tamanho
export const Small: Story = {
  args: {
    label: "Escolha uma opção",
    size: "small",
    options: ["Opção 1", "Opção 2", "Opção 3"],
  },
};

export const Medium: Story = {
  args: {
    label: "Escolha uma opção",
    size: "medium",
    options: ["Opção 1", "Opção 2", "Opção 3"],
  },
};

export const Large: Story = {
  args: {
    label: "Escolha uma opção",
    size: "large",
    options: ["Opção 1", "Opção 2", "Opção 3"],
  },
};
