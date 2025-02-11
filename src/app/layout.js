"use client";
import "./globals.css";
import Header from "./header/page.jsx";
import styles from "./page.module.css";
import { usePathname  } from "next/navigation";

// export const metadata = {
//   title: "Space Tourism",
//   description: "Space Tourism Website",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();  
  let classNameMain;

  if(pathName === "/") classNameMain = `${styles.main} ${styles.main_home}`;
  if(pathName.startsWith("/destination/")) classNameMain = `${styles.main} ${styles.main_destination}`;
  if(pathName.startsWith("/crew/")) classNameMain = `${styles.main} ${styles.main_crew}`;
  if(pathName.startsWith("/technology/")) classNameMain = `${styles.main} ${styles.main_technology}`;

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
