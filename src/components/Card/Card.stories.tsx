import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Button } from "../Button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Card Title",
    children: "This is the card body content providing important information.",
    hoverable: true,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHover: Story = {
  args: {
    hoverable: false,
    title: "Static Card",
    children: "This card does not elevate on hover.",
  },
};

export const WithInteractiveElements: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <p style={{ marginBottom: 16 }}>
        Explore our modern component library with React, Vite, and Storybook.
      </p>
      <Button variant="primary" size="small">
        Action
      </Button>
    </Card>
  ),
};
