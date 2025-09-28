import type { Meta, StoryObj } from "@storybook/react";
import { NavigationDrawer } from "../components/NavigationDrawer";
import { Menu } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof NavigationDrawer> = {
  title: "Components/NavigationDrawer",
  component: NavigationDrawer,
  tags: ["autodocs"],
  argTypes: {
    onOpenChange: { action: "toggled" },
  },
};
export default meta;

type Story = StoryObj<typeof NavigationDrawer>;

const Template = (args: { variant: "mobile" | "tablet" | "desktop" }) => {
  const [open, setOpen] = useState(args.variant !== "mobile");

  return (
    <>
      {args.variant === "mobile" && (
        <button
          style={{
            cursor: "pointer",
            border: "8px",
            marginBottom: "1rem",
          }}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      )}
      <NavigationDrawer
        {...args}
        open={open}
        onOpenChange={(o) => setOpen(o)}
      />
    </>
  );
};



export const Mobile: Story = {
  render: () => (<div
        className="storybook-preview"
        style={{
          width: "320px",
          height: "600px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Template variant="mobile" />
      </div>
  ),
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "200px",
      },
    },
  },
};

export const Tablet: Story = {
  render: () => (
    <Template variant="tablet" />
  ),
  parameters: {
    docs: {
      story: {
        inline: false,
      },
    },
  },
};

export const Desktop: Story = { 
  render: () => (
    <div
      className="storybook-preview"
      style={{
        width: "320px",
        height: "400px",
        position: "absolute",
        top: "0",
        overflow: "auto",
      }}
    >
      <Template variant="desktop" />
    </div>
  ),
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "400px",
      },
    },
  },
};



