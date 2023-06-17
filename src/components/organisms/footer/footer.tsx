import React from "react";
import styles from "./footer.module.css";

type Props = {};

const footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a href="/">RoundRobin App @ {new Date().getFullYear()}</a>
    </footer>
  );
};

export default footer;
