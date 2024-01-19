import React from "react";

import styles from "./styles.module.scss";

type TabBarProps = {
  children: React.ReactNode;
};

function TabBar({ children }: TabBarProps) {
  return <div className={styles.tab_bar}>{children}</div>;
}

export default TabBar;
