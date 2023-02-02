import classNames from "classnames";
import { motion } from "framer-motion"

import { getDate } from "helpers/get-date";
import { CharacterStatus, ICharacter } from "types";

import styles from "./character-card.module.scss";

interface IProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: IProps) => {
  const { image, name, species, status, location, created } = character;
  const { fullDay, fullTime } = getDate(created);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.container}>
      <img
        className={styles.image}
        src={image}
        alt="assets/unknown_person.jpg"
      />
      <div className={styles.descriptionContainer}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.speciesContainer}>
          <div
            className={classNames(
              styles.status,
              status === CharacterStatus.ALIVE && styles.statusAlive,
              status === CharacterStatus.DEAD && styles.statusDead,
              status === CharacterStatus.UNKNOWN && styles.statusUnknown
            )}
          />
          <p className={classNames(styles.text, styles.statusText)}>
            {status} - {species}
          </p>
        </div>
        <p className={styles.textTitle}>Location:</p>
        <p className={styles.text}>{location.name}</p>
        <p className={styles.textTitle}>Created:</p>
        <p className={styles.text}>
          {fullDay} {fullTime}
        </p>
      </div>
    </motion.div>
  );
};
