import { memo } from "react";

import styles from "./styles.module.scss";

type TabNavItemProps = {
  name: string;
  active?: Boolean;
  handleClickTab?: Function;
  tabIndex: number;
  id: string;
};

function TabNavItem({
  name,
  active = false,
  handleClickTab = () => {},
  tabIndex,
  id,
}: TabNavItemProps) {
  return (
    <div
      title={name}
      onClick={() => handleClickTab(tabIndex, id)}
      data-active={active}
      className={styles.tab}
    >
      {name}
      <div className={styles.underline}></div>
    </div>
  );
}

export default memo(TabNavItem);
