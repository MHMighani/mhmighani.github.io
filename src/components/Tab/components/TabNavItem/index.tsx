import styles from "./styles.module.scss";

type TabNavItemProps = { name: String; active?: Boolean };

function TabNavItem({ name, active = false }: TabNavItemProps) {
  return (
    <div data-active={active} className={styles.tab}>
      {name}
    </div>
  );
}

export default TabNavItem;
