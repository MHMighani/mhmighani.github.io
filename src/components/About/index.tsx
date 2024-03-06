import NeonText from "components/NeonText";
import styles from "./styles.module.scss";

const COLORS = {
  HTML: "#e96228",
  CSS: "#2862e9",
  JavaScript: "#efd81d",
  REACT: "#087a9f",
  TypeScript: "#2f74c0",
  python: "#f7cc42",
  next: "#0d90f7",
  redux: "#0d90f7",
};

function About() {
  const renderHtmlWord = <NeonText color={COLORS["HTML"]} text="HTML" />;
  const renderReduxWord = <NeonText color={COLORS["redux"]} text="redux" />;
  const renderNextWord = <NeonText color={COLORS["next"]} text="Next.js" />;
  const renderTypeScript = (
    <NeonText color={COLORS["TypeScript"]} text="TypeScript" />
  );
  const renderJavaScript = (
    <NeonText color={COLORS["JavaScript"]} text="JavaScript" />
  );
  const renderCssWord = <NeonText color={COLORS["CSS"]} text="CSS" />;
  const renderReactWord = <NeonText color={COLORS["REACT"]} text="React.js" />;
  const renderPythonWord = <NeonText color={COLORS["python"]} text="Python" />;

  const ABOUT = (
    <>
      I&apos;m a web developer Developer with Proficiency in core Front-End
      technologies and frameworks such as {renderJavaScript}, {renderTypeScript}
      , {renderHtmlWord}, {renderCssWord}, {renderReactWord}, {renderReduxWord},
      and {renderNextWord}. I prioritize writing clean and maintainable code in
      my coding style and thrive on creating visually compelling products.In
      addition to my expertise in Front-End development, I have some experiences
      doing scripting and automation tasks with {renderPythonWord}.
    </>
  );

  return (
    <div>
      <p className={styles.about}>{ABOUT}</p>
    </div>
  );
}

export default About;
