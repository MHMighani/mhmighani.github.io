import { memo } from "react";

import styles from "./styles.module.scss";

type TabNavItemProps = {
  name: String;
  active?: Boolean;
  handleClickTab: Function;
  tabIndex: number;
};

function TabNavItem({
  name,
  active = false,
  handleClickTab,
  tabIndex,
}: TabNavItemProps) {
  return (
    <div
      onClick={() => handleClickTab(tabIndex)}
      data-active={active}
      className={styles.tab}
    >
      {name}
    </div>
  );
}

export default memo(TabNavItem);
