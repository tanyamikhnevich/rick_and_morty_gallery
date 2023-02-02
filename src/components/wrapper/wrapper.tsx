import { HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./wrapper.module.scss";

export type WrapperProps = HTMLAttributes<HTMLDivElement>;

export const Wrapper = (props: PropsWithChildren<WrapperProps>) => {
  return (
    <div className={styles.background}>
      <div {...props} className={classNames(styles.wrapper, props.className)}>
        {props.children}
      </div>
    </div>
  );
};
