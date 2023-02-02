import styles from "./loader.module.scss";

export const Loader = () => {
  return (
      <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>

  );
};

