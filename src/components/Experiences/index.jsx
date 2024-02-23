import ExperienceCard from "./components/ExperienceCard";
import raychatLogo from "assets/images/exp_raychat.svg";

const EXPERIENCES = [
  {
    id: "raychat",
    expTitle: "Front-End Developer",
    expSubTitle: "Raychat",
    expLogoAddress: raychatLogo,
    achievements: [
      "-	Participated in optimizations such as improving loading times by implementing lazy loading techniques, code splitting and rendering optimization.",
      "-	Participated in adding multilingual support to services.",
      "-	Participated in refactoring legacy code, and extracting reusable components resulting in improved maintainability.",
      "-	Implemented multiple features such as Raychat's answering bot.",
      "-	Participated in documenting services using Confluence.",
    ],
    duration: { from: "Jul 2022", to: "Present" },
    about: "A customer service chat platform",
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
