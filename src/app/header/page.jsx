"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from 'react';
import { useMediaQuery } from "@react-hook/media-query"; 
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const isMobile = useMediaQuery('(max-width: 551px)');
    const isTablet = useMediaQuery('(max-width: 769px)');
    const pathName = usePathname();

    let classNameNav;
    switch (showNav) {
        case true:
            classNameNav = `${styles.header_navBar} ${styles.fadeInRight}`
            break;
        case false:
            classNameNav = `${styles.header_navBar} ${styles.fadeOutRight}`
            break;
        default:
            break;
    }

    function handleShowNav()  {
        setShowNav(true);
        setShowCloseIcon(true)
    }

    function handleHideNav() {
        setShowNav(false);
        setShowCloseIcon(false);
    }

    return(
        <header className={styles.header}>
            <Image 
                className={styles.header_logo}
                src="/assets/shared/logo.svg"
                alt="logo"
                width={48}
                height={48}
            />
            <hr></hr>
            {isMobile && !showCloseIcon &&
                <Image 
                    onClick={handleShowNav}
                    className={styles.header_btn}
                    src="\assets\shared\icon-hamburger.svg"
                    alt="open navbar"
                    width={20}
                    height={16}
                />
            }

            {isMobile && showCloseIcon &&
                <Image 
                    onClick={handleHideNav}
                    className={styles.header_btn}
                    src="\assets\shared\icon-close.svg"
                    alt="close"
                    width={20}
                    height={20}
                />
            }
            <nav className={classNameNav}>
                <ul>
                    <li><Link href="/" className={(pathName === "/") ? `${styles.link} ${styles.selected}` : styles.link}><b>00</b>Home</Link></li>
                    <li><Link href="/destination/Moon" className={(pathName.startsWith("/destination/")) ? `${styles.link} ${styles.selected}` : styles.link}><b>01</b>Destination</Link></li>
                    <li><Link href="/crew/DouglasHurley" className={(pathName.startsWith("/crew/")) ? `${styles.link} ${styles.selected}` : styles.link}><b>02</b>Crew</Link></li>
                    <li><Link href="/technology/Launchvehicle" className={(pathName.startsWith("/technology/")) ? `${styles.link} ${styles.selected}` : styles.link}><b>03</b>Technology</Link></li>
                </ul>
            </nav>
        </header>
    )
} 