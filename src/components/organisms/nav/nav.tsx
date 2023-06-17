import React from "react";
import styles from "./nav.module.css";
import { BeakerIcon } from "@heroicons/react/24/solid";

type Props = {};

const nav = (props: Props) => {
  return (
    <nav className={styles.sidenav}>
      <BeakerIcon className="h-6 w-6 text-white" />
    </nav>
  );
};

export default nav;
