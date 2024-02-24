import ExperienceCard from "./components/ExperienceCard";
import raychatLogo from "assets/images/exp_raychat.svg";
import mtaLogo from "assets/images/mta_logo.png";
import freelancelogo from "assets/images/freelance.svg";
import styles from "./styles.module.scss";

const EXPERIENCES = [
  {
    id: "raychat",
    expTitle: "Front-End Developer",
    expSubTitle: "Raychat",
    expLogoAddress: raychatLogo,
    achievements: [
      "	Participated in optimizations such as improving loading times by implementing lazy loading techniques, code splitting and rendering optimization.",
      "	Participated in adding multilingual support to services.",
      "	Participated in refactoring legacy code, and extracting reusable components resulting in improved maintainability.",
      "	Implemented multiple features such as Raychat's answering bot.",
      "	Participated in documenting services using Confluence.",
    ],
    duration: { from: "Jul 2022", to: "Present" },
    about: "Raychat is a customer service chat platform",
    expExternalLink: "https://raychat.io/",
  },
  {
    id: "freelance",
    expTitle: "Front-End Developer",
    expSubTitle: "Freelance",
    expLogoAddress: freelancelogo,
    achievements: [
      "Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
    ],
    duration: { from: "Decamber 2021 ", to: "May 2022" },
    about: "",
    expExternalLink: "",
  },
  {
    id: "arad",
    expTitle: "Python Developer",
    expSubTitle: "Madar Tarah-e Arad Co",
    expLogoAddress: mtaLogo,
    achievements: [
      "Collaborated in the process of building the user interface of a VOIP application as a python developer.",
    ],
    duration: { from: "April 2019 ", to: "September 2019 " },
    about: "",
    expExternalLink: "",
  },
];

function Experiences() {
  const renderExps = EXPERIENCES.map((exp) => (
    <ExperienceCard key={exp.id} {...exp} />
  ));

  return <div className={styles.experiences_wrapper}>{renderExps}</div>;
}

export default Experiences;
