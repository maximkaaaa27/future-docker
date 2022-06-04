import React from "react";
import { Link } from "react-router-dom";
import styles from "./selecttable.module.scss";

export const SelectTable = () => {
  return (
    <>
      <div className={styles.select}>
        <Link to="normal" className={styles.selectItem}>
          <span> NORMAL TABLE </span>
        </Link>
        <Link to="big" className={styles.selectItem}>
          <span> BIG TABLE </span>
        </Link>
      </div>
    </>
  );
};
