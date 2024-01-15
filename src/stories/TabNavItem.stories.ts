import type { Meta, StoryObj } from "@storybook/react";

import TabNavItem from "../components/TabNavItem";

const meta: Meta<typeof TabNavItem> = {
  component: TabNavItem,
};

export default meta;
type Story = StoryObj<typeof TabNavItem>;

export const Primary: Story = {
  args: {
    name: "Tab 2",
  },
};
