import type { Meta, StoryObj } from "@storybook/react";

import ExperienceCard from "../components/Experiences/components/ExperienceCard";

const meta: Meta<typeof ExperienceCard> = {
  component: ExperienceCard,
};

export default meta;

type Story = StoryObj<typeof ExperienceCard>;

const achievements = ["one", "two", "three"];

const about = "A customer service chat service";

export const Normal: Story = {
  args: {
    expTitle: "Front-End Developer",
    expSubTitle: "Raychat",
    expLogoAddress:
      "https://raychat.io/_next/static/media/raychat-logo.ef48f641.svg",
    achievements,
    duration: { from: "Jul 2022", to: "Present" },
    about,
  },
};
