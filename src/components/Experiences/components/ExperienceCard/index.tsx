import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

type Props = {
  expTitle: string;
  expSubTitle: string;
  expLogoAddress: string;
  duration: { from: string; to: string };
  achievements: string[];
  about: string;
  expExternalLink?: string;
};

function ExperienceCard({
  expTitle,
  expSubTitle,
  expLogoAddress,
  duration,
  achievements,
  about,
  expExternalLink,
}: Props) {
  const renderAchievements = achievements.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const renderExpSubtitle = expExternalLink ? (
    <Link target="_blank" href={expExternalLink}>
      {expSubTitle}
    </Link>
  ) : (
    <span>{expSubTitle}</span>
  );

  return (
    <div className={styles.exp_card}>
      {/* title */}
      <div className={styles.exp_card__header}>
        {/* info */}
        <div className={styles.exp_card__header__title_container}>
          <Image
            width={65}
            height={65}
            alt={expSubTitle}
            src={expLogoAddress}
          />
          <div className={styles.exp_card__header__title}>
            <h3>{expTitle}</h3>
            <div className={styles.exp_card__header__subtitle}>
              <span>{renderExpSubtitle}</span>
              {/* period */}
              <span className={styles.exp_card__header__period}>
                {duration.from} - {duration.to}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* achivement content */}
      <ul>{renderAchievements}</ul>

      <p>{about}</p>
    </div>
  );
}

export default ExperienceCard;
