import styles from "./styles.module.scss";

type PropsTypes = { text: string };

function Neon({ text }: PropsTypes) {
  return <span className={styles.neon}>{text}</span>;
}

export default Neon;
