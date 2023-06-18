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
import { Link, Outlet } from "react-router-dom";

type Props = {};

const navItems = [
  { name: "Home", icon: BeakerIcon, path: "/" },
  { name: "register", icon: PhotoIcon, path: "/register" },
];
const nav = (props: Props) => {
  return (
    <>
      <nav className={styles.sidenav}>
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link to={item.path}>
              <IconComponent key={index} className="h-6 w-6 text-white" />
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
};

export default nav;
