import Image from "next/image";

import styles from "./styles.module.scss";

type Props = {
  expTitle: string;
  expSubTitle: string;
  expLogoAddress: string;
  duration: { from: string; to: string };
  achievements: string[];
  about: string;
};

function ExperienceCard({
  expTitle,
  expSubTitle,
  expLogoAddress,
  duration,
  achievements,
  about,
}: Props) {
  const renderAchievements = achievements.map((item, index) => (
    <li key={index}>{item}</li>
  ));

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
            <span>{expSubTitle}</span>
          </div>
        </div>

        {/* period */}
        <div>
          <span>{duration.from}</span>
          <span>{duration.to}</span>
        </div>
      </div>

      {/* achivement content */}
      <ul>{renderAchievements}</ul>

      <p>{about}</p>
    </div>
  );
}

export default ExperienceCard;
