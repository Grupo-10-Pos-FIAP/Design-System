import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "../components/Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["success", "error", "warning", "info"],
    },
    message: { control: "text" },
    closable: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    message: "Mensagem padrão de exemplo.",
    variant: "default",
    closable: true, 
  },
};

export const Success: Story = {
  args: {
    message: "Mensagem de sucesso de exemplo.",
    variant: "success",
    closable: true, 
  },
}

export const Error: Story = {
  args: {
    message: "Mensagem de erro de exemplo.",
    variant: "error",
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    message: "Mensagem de aviso de exemplo.",
    variant: "warning",
    closable: true,
  },
};

export const Info: Story = {
  args: {
    message: "Mensagem informativa de exemplo.",
    variant: "info",
    closable: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "90%", margin: "0 auto" }}>
      <Snackbar message="Default" variant="default" closable />
      <Snackbar message="Success" variant="success" closable />
      <Snackbar message="Error" variant="error" closable />
      <Snackbar message="Warning" variant="warning" closable />
      <Snackbar message="Info" variant="info" closable />
    </div>
  ),
  parameters: {
    docs: {
      story: {
        height: "400px",
        inline: false,
        description: "Visualização de todas as variações do Snackbar em um único preview.",
      },
    },
  },
};