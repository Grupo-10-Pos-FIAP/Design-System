import { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { SnackbarProps } from "@/components/Snackbar/interface";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

const ControlledSnackbar = (args: SnackbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>

      <Snackbar
        {...args}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "Message shown in the snackbar",
      defaultValue: "Operation completed successfully!",
    },
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "Type of snackbar",
    },
    duration: {
      control: { type: "number" },
      description: "Duration (ms) until it disappears",
      defaultValue: 4000,
    },
  },
  render: (args) => <ControlledSnackbar {...args} />,
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    message: "Operation completed successfully!",
    variant: "success",
    duration: 4000,
  },
};

export const VariantsOverview: Story = {
  render: () => {
    const variants: SnackbarProps["variant"][] = [
      "success",
      "error",
      "info",
      "warning",
    ];

    const [openVariant, setOpenVariant] = useState<string | null>(null);

    const messages = {
      success: "Saved successfully!",
      error: "Connection error.",
      info: "New update available.",
      warning: "Risk of data loss.",
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {variants.map((variant: "info" | "success" | "warning" | "error" | undefined) => (
          <div key={variant}>
            <Button onClick={() => setOpenVariant(variant ?? null)}>
              Show {variant}
            </Button>
            <Snackbar
              variant={variant}
              message={messages[variant ?? 'info']}
              open={openVariant === variant}
              onOpenChange={(open) => !open && setOpenVariant(null)}
              duration={4000}
            />
          </div>
        ))}
      </div>
    );
  },
};
