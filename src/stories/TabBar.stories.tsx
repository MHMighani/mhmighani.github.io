import type { Meta, StoryObj } from "@storybook/react";

import TabNavItem from "../components/Tab/components/TabNavItem";
import TabBar from "../components/Tab/components/TabBar";

const meta: Meta<typeof TabBar> = {
  component: TabBar,
};

export default meta;
type Story = StoryObj<typeof TabBar>;

export const MultipleItemsNormal: Story = {
  render: () => (
    <TabBar>
      {Array.apply(null, Array(5)).map((item, index) => (
        <TabNavItem key={index} tabIndex={index} name={`Tab ${index + 1}`} />
      ))}
    </TabBar>
  ),
};
