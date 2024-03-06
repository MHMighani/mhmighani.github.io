import styles from "./styles.module.scss";

type PropsTypes = { text: string; color?: string };

function Neon({ text, color }: PropsTypes) {
  return (
    <span style={{ color }} className={styles.neon}>
      {text}
    </span>
  );
}

export default Neon;
