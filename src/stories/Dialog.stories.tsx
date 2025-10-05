import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DialogComponent from "../components/Dialog/Dialog";

const meta: Meta<typeof DialogComponent> = {
  title: "Components/Dialog",
  component: DialogComponent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DialogComponent>;

export const Default: Story = {
  render: () => <DialogComponent />,
};
