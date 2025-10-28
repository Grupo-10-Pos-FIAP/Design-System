import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "../components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const UserAvatar = () => (
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

export const Default: Story = {
  args: {
    avatar: <UserAvatar />
  },
  parameters: {
    docs: {
      source: {
        code: `
<Header 
  avatar={
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
  } 
/>
        `.trim()
      }
    }
  },
};