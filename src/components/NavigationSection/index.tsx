import Image from "next/image";

import Reachme from "@/components/Reachme";
import introImage from "@/assets/images/intro_image.jpg";
import styles from "./styles.module.scss";

function NavigationSection() {
  return (
    <section className={styles.navigation_section}>
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
    </section>
  );
}

export default NavigationSection;
