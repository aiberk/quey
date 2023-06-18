import React from "react";
import styles from "./nav.module.css";
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

type Props = {};

const navItems = [
  { name: "Home", icon: BeakerIcon, path: "/" },
  { name: "About", icon: FilmIcon, path: "/about" },
  { name: "register", icon: PhotoIcon, path: "/register" },
];
const nav = (props: Props) => {
  return (
    <nav className={styles.sidenav}>
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a href={item.path} key={index}>
            <IconComponent key={index} className="h-6 w-6 text-white" />
          </a>
        );
      })}
    </nav>
  );
};

export default nav;
