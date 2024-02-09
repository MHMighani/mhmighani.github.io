import ExperienceCard from "./components/ExperienceCard";

const EXPERIENCES = [
  {
    id: "raychat",
    expTitle: "Front-End Developer",
    expSubTitle: "Raychat",
    expLogoAddress:
      "https://raychat.io/_next/static/media/raychat-logo.ef48f641.svg",
    achievements: ["one", "two", "three"],
    duration: { from: "Jul 2022", to: "Present" },
    about: "A customer service chat service",
    expExternalLink: "https://raychat.io/",
  },
];

function Experiences() {
  const renderExps = EXPERIENCES.map((exp) => (
    <ExperienceCard key={exp.id} {...exp} />
  ));

  return <div>{renderExps}</div>;
}

export default Experiences;
