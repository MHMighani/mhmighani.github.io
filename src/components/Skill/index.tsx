import Image from "next/image";

import styles from "./styles.module.scss";

type Props = {
  logo: string;
  title: string;
};

function Skill({ logo, title }: Props) {
  return (
    <div className={styles.skill}>
      <Image width={50} height={50} alt={title} src={logo} />
      <span className={styles.skill__title}>{title}</span>
    </div>
  );
}

export default Skill;
