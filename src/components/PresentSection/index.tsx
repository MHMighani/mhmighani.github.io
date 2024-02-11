"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import SkillsSet from "../SkillsSet";
import About from "../About";
import TabNavItem from "../Tab/components/TabNavItem/index";
import TabBar from "../Tab/components/TabBar";
import Experiences from "../Experiences";
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
    content: <Experiences />,
  },
  {
    tabIndex: 2,
    id: "skills",
    label: "Skills",
    content: <SkillsSet />,
  },
];

function PresentSection() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const tabQueryParam = searchParams.get("tab");
  const initialTabIndex =
    TAB_ITEMS.find((item) => item.id === tabQueryParam)?.tabIndex || 0;

  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const replaceNewTabInUrl = (tabId: string) => {
    const newRoute = `${pathName}?tab=${tabId}`;
    router.replace(newRoute);
  };

  const handleClickTab = (index: number, id: string) => {
    setActiveTabIndex(index);
    replaceNewTabInUrl(id);
  };

  const activeContent = TAB_ITEMS[activeTabIndex].content;

  const renderTabItems = TAB_ITEMS.map((item) => (
    <TabNavItem
      handleClickTab={handleClickTab}
      key={item.id}
      name={item.label}
      active={activeTabIndex === item.tabIndex}
      tabIndex={item.tabIndex}
      id={item.id}
    />
  ));

  return (
    <section className={styles.present_section}>
      <TabBar>{renderTabItems}</TabBar>
      <div className={styles.tab_content_wrapper}>{activeContent}</div>
    </section>
  );
}

export default PresentSection;
