import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../lib/components/Header/Header";

// Mock simples de avatar
const MockUserAvatar = () => (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#555",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    U
  </div>
);

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header avatar={<MockUserAvatar />} />,
};