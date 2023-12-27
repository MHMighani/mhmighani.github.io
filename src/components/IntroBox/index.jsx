import Image from "next/image";

import styles from "./styles.module.scss";
import introImage from "../../assets/images/intro_image.jpg";

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
        <p>Mohammad Hossein Mighani</p>
      </div>
      <div className={styles.about}></div>
    </div>
  );
}

export default Intro;
