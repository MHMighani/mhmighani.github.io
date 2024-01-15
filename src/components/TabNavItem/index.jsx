import styles from "./styles.module.scss";

function TabNavItem({ name, active }) {
  return (
    <div data-active={active} className={styles.tab}>
      {name}
    </div>
  );
}

export default TabNavItem;
