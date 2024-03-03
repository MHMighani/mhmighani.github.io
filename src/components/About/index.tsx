import NeonText from "components/NeonText";
import styles from "./styles.module.scss";

function About() {
  const renderHtmlWord = <NeonText text="HTML" />;
  const renderReduxWord = <NeonText text="redux" />;
  const renderNextWord = <NeonText text="Next.js" />;
  const renderTypeScript = <NeonText text="TypeScript" />;
  const renderJavaScript = <NeonText text="JavaScript" />;
  const renderCssWord = <NeonText text="CSS" />;
  const renderReactWord = <NeonText text="React.js" />;

  const ABOUT = (
    <>
      I&apos;m a web developer Developer with Proficiency in core Front-End
      technologies and frameworks such as {renderJavaScript}, {renderTypeScript}
      , {renderHtmlWord}, {renderCssWord}, {renderReactWord}, {renderReduxWord},
      and {renderNextWord}. I prioritize writing clean and maintainable code in
      my coding style and thrive on creating visually compelling products.In
      addition to my expertise in Front-End development, I have some experiences
      doing scripting and automation tasks with Python.
    </>
  );

  return (
    <div>
      <p className={styles.about}>{ABOUT}</p>
    </div>
  );
}

export default About;
