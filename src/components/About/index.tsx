import styles from "./styles.module.scss";

const ABOUT =
  "I'm a Front End Developer with Proficiency in core Front-End technologies and frameworks such as JavaScript, TypeScript, HTML, CSS, React.js, Redux, and Next.js. I prioritize writing clean and maintainable code in my coding style and thrive on creating visually compelling products.In addition to my expertise in Front-End development, I have some experiences doing scripting and automation tasks with Python.";

function About() {
  return (
    <div>
      <p className={styles.about}>{ABOUT}</p>
    </div>
  );
}

export default About;
