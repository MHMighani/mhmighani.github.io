import PresentSection from "../PresentSection";
import NavigationSection from "../NavigationSection";
import styles from "./styles.module.scss";

const ABOUT =
  "I’m a Web Developer who has mainly focused on developing the Front-End part of web applications. I constantly seek for . In addition to JavaScript ES6 and React, I have experience working with Python.";

function Main() {
  return (
    <div className={styles.main}>
      <PresentSection />
      <NavigationSection />
    </div>
  );
}

export default Main;
