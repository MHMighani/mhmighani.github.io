import Image from "next/image";

import Skill from "components/Skill";
import styles from "./styles.module.scss";

const SKILLS = [
  {
    title: "Javascript",
    iconPathFileName: "javaScript.png",
  },
  {
    title: "TypeScript",
    iconPathFileName: "typeScript.png",
  },
  {
    title: "CSS",
    iconPathFileName: "css.png",
  },
  {
    title: "Git",
    iconPathFileName: "git.png",
  },
  {
    title: "HTML",
    iconPathFileName: "html.png",
  },
  {
    title: "Linux",
    iconPathFileName: "linux.png",
  },
  {
    title: "NodeJS",
    iconPathFileName: "nodeJS.png",
  },
  {
    title: "Python",
    iconPathFileName: "python.png",
  },
  {
    title: "ReactFlow",
    iconPathFileName: "reactFlow.svg",
  },
  {
    title: "ReactJS",
    iconPathFileName: "reactJS.png",
  },

  {
    title: "ReduxSaga",
    iconPathFileName: "ReduxSaga.png",
  },

  {
    title: "REST API",
    iconPathFileName: "restAPI.png",
  },

  {
    title: "SASS",
    iconPathFileName: "sass.png",
  },

  {
    title: "socketIO",
    iconPathFileName: "socketIo.png",
  },
  {
    title: "storybook",
    iconPathFileName: "storybook.svg",
  },
];

const getLogoFilePath = (iconPathFileName: string) =>
  `assets/images/skills/${iconPathFileName}`;

function SkillsSet() {
  const renderSkillsSetImages = SKILLS.map((item) => {
    return (
      <Skill
        key={item.title}
        title={item.title}
        logo={require(`assets/images/skills/${item.iconPathFileName}`)}
      />
    );
  });

  return <div className={styles.skills}>{renderSkillsSetImages}</div>;
}

export default SkillsSet;
