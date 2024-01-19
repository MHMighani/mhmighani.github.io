import PresentSection from "../PresentSection";
import NavigationSection from "../NavigationSection";
import styles from "./styles.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <NavigationSection />
      <PresentSection />
    </div>
  );
}

export default Main;
