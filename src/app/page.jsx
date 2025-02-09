"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Destination from "./Components/Destination.jsx";
import Crew from "./Components/Crew.jsx";
import Technology from "./Components/Technology";


export default function Main() {

  const [views, setViews] = useState({
    homeView: false,
    destinationView: false,
    crewView: false,
    technologyView: true,
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
    <main className={classNameMain}>
      <Header />
      {/* <Home /> */}
      {/* <Destination /> */}
      {/* <Crew /> */}
      <Technology />
    </main>
  );
}
