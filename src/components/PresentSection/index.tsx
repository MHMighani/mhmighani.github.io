"use client";

import { useState } from "react";

import About from "../About";
import TabNavItem from "../Tab/components/TabNavItem/index";
import TabBar from "../Tab/components/TabBar";
import styles from "./styles.module.scss";

const TAB_ITEMS = [
  {
    tabIndex: 0,
    id: "intro",
    label: "About",
    content: <About />,
  },
  {
    tabIndex: 1,
    id: "experiences",
    label: "Experiences",
    content: "Experiences",
  },
  {
    tabIndex: 2,
    id: "skills",
    label: "Skills",
    content: "Skills",
  },
];

function PresentSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClickTab = (index: number) => setActiveTabIndex(index);

  const activeContent = TAB_ITEMS[activeTabIndex].content;

  const renderTabItems = TAB_ITEMS.map((item) => (
    <TabNavItem
      handleClickTab={handleClickTab}
      key={item.id}
      name={item.label}
      active={activeTabIndex === item.tabIndex}
      tabIndex={item.tabIndex}
    />
  ));

  return (
    <section className={styles.present_section}>
      <TabBar>{renderTabItems}</TabBar>
      <div>{activeContent}</div>
    </section>
  );
}

export default PresentSection;
