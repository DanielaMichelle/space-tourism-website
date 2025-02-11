"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Home from "./home/page.jsx";

export default function Main() {

  const [views, setViews] = useState({
    homeView: true,
    destinationView: false,
    crewView: false,
    technologyView: false,
  });

  // Object.keys(isView) ==>>> ["homeView", "destinationView", "crewView", "technologyView"]
  // isView["homeView"] = true
  const currentView = Object.keys(views).find(view => views[view]);
  // console.log(typeof(currentView)); // string
  
  let classNameMain;
  switch (currentView) {
    case "homeView":
      classNameMain = `${styles.main} ${styles.main_home}`;
      break;
    case "destinationView":
      classNameMain = `${styles.main} ${styles.main_destination}`;
      break;
    case "crewView":
      classNameMain = `${styles.main} ${styles.main_crew}`;
      break;
    case "technologyView":
      classNameMain = `${styles.main} ${styles.main_technology}`;
      break;
    default:
      break;
  }

  return (
    <Home />
  );
}
