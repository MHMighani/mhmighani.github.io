"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

import Typed from "typed.js";

import Reachme from "components/Reachme";
import introImage from "assets/images/intro_image.jpg";
import styles from "./styles.module.scss";

function NavigationSection() {
  const typeEffectEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeEffectEl.current, {
      strings: [
        "I'm a Web Developer",
        "Focused on Front End",
        "Eager to learn",
      ],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.navigation_section}>
      <div className={styles.profile_and_contact}>
        <Image className={styles.profile_image} src={introImage} alt="me" />
        <div className={styles.name_contact}>
          <h2 className={styles.name}>Mohammad Hossein Mighani</h2>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div ref={typeEffectEl}></div>
          </div>

          <Reachme />
        </div>
      </div>
    </section>
  );
}

export default NavigationSection;
