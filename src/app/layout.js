"use client";
import "./globals.css";
import Header from "./header/page.jsx";
import styles from "./page.module.css";
import { useState } from "react";
import { usePathname  } from "next/navigation";

// export const metadata = {
//   title: "Space Tourism",
//   description: "Space Tourism Website",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log("route: ", pathName);
  

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
    <html lang="en">
      <body>
         <main className={classNameMain}>
            <Header />
            {children}
          </main>
      </body>
    </html>
  );
}
