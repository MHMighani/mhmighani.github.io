import type { Meta, StoryObj } from "@storybook/react";

import TabNavItem from "../components/Tab/components/TabNavItem";
import TabBar from "../components/Tab/components/TabBar";

const meta: Meta<typeof TabBar> = {
  component: TabBar,
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const OneItem: Story = {
  render: () => (
    <TabBar>
      <TabNavItem name="Tab 1" />
      <TabNavItem name="Tab 2" />
    </TabBar>
  ),
};
