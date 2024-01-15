import Image from "next/image";

import Reachme from "@/components/Reachme";
import introImage from "@/assets/images/intro_image.jpg";
import styles from "./styles.module.scss";
import TabNavItem from "./../TabNavItem/index";

const ABOUT =
  "I’m a Web Developer who has mainly focused on developing the Front-End part of web applications. I constantly seek for . In addition to JavaScript ES6 and React, I have experience working with Python.";

function Intro() {
  return (
    <div className={styles.intro_box}>
      <div className={styles.profile_and_contact}>
        <Image
          className={styles.profile_image}
          width={150}
          src={introImage}
          alt="me"
        />
        <div className={styles.name_contact}>
          <h2>Mohammad Hossein Mighani</h2>
          <Reachme />
        </div>
      </div>
      <div className={styles.about}>
        <TabNavItem name="tab1" />
      </div>
    </div>
  );
}

export default Intro;
