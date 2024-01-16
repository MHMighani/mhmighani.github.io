import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const ITEMS = [
  {
    icon: faGithub,
    title: "github",
    url: "http://github.com/MHMighani",
  },
  {
    icon: faLinkedin,
    title: "linkedin",
    url: "https://www.linkedin.com/in/mh-mighani/",
  },
  {
    icon: faEnvelope,
    title: "email",
    url: "mailto:mhmighani.dev@gmail.com",
  },
];

function ReachMe() {
  return (
    <div className={styles.contact_links}>
      {ITEMS.map((item) => (
        <a key={item.title} target="_blank" href={item.url}>
          <FontAwesomeIcon className={styles.icon} icon={item.icon} />
        </a>
      ))}
    </div>
  );
}

export default ReachMe;
