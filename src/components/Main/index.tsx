import PresentSection from "components/PresentSection";
import NavigationSection from "components/NavigationSection";
import styles from "./styles.module.scss";

function Main() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.main}>
        <NavigationSection />
        <PresentSection />
      </div>
    </div>
  );
}

export default Main;
