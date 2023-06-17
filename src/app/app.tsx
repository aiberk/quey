import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  PhoneXMarkIcon,
  LockClosedIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Button from "components/atoms/button";
import CopyButton from "components/molecules/copy-button";

import styles from "./app.module.css";
import Footer from "components/organisms/footer";
import Nav from "components/organisms/nav";
import QueueComponent from "components/organisms/queue";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      {/* <Nav /> */}
      <main className={styles.main2}>
        <QueueComponent />
      </main>

      {/* <header className={styles.header}></header> */}
      <Nav />
      {/* <footer className={styles.footer}></footer> */}
    </main>
  );
};

export default App;