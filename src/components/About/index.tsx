import styles from "./styles.module.scss";

const ABOUT =
  "I’m a Web Developer who has mainly focused on developing the Front-End part of web applications. I constantly seek for . In addition to JavaScript ES6 and React, I have experience working with Python.";

function About() {
  return (
    <div>
      <p className={styles.about}>{ABOUT}</p>
    </div>
  );
}

export default About;
