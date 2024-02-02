import type { Meta, StoryObj } from "@storybook/react";

import Skill from "../components/Skill";

const meta: Meta<typeof Skill> = {
  component: Skill,
};

export default meta;
type Story = StoryObj<typeof Skill>;

export const Active: Story = {
  args: {
    logo: "https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/ad39b/react.png",
    title: "react",
  },
};
