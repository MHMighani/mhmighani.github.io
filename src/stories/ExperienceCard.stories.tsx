import type { Meta, StoryObj } from "@storybook/react";

import ExperienceCard from "../components/Experiences/components/ExperienceCard";

const meta: Meta<typeof ExperienceCard> = {
  component: ExperienceCard,
};

export default meta;

type Story = StoryObj<typeof ExperienceCard>;

export const Normal: Story = {
  args: {},
};
