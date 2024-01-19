import type { Meta, StoryObj } from "@storybook/react";

import TabNavItem from "../components/Tab/components/TabNavItem";
import TabBar from "@/components/Tab/components/TabBar";

const meta: Meta<typeof TabNavItem> = {
  component: TabNavItem,
};

const tabName = "Tab";
const longTitleText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, sed.";

export default meta;
type Story = StoryObj<typeof TabNavItem>;

export const Primary: Story = {
  args: {
    name: tabName,
  },
};

export const Active: Story = {
  args: {
    active: true,
    name: tabName,
  },
};

export const TextLong: Story = {
  args: {
    name: longTitleText,
  },
};
