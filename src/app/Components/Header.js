import styles from "./styles/Header.module.css";
import Image from "next/image";
import { useState, useRef } from 'react';
import { useMediaQuery } from '@react-hook/media-query'

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const isMobile = useMediaQuery('(max-width: 426px)');

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
                width={32}
                height={32}
            />
            {isMobile && !showCloseIcon &&
                <Image 
                    onClick={handleShowNav}
                    className={styles.header_btn}
                    src="\assets\shared\icon-hamburger.svg"
                    alt="open navbar"
                    width={24}
                    height={20}
                />
            }

            {isMobile && showCloseIcon &&
                <Image 
                    onClick={handleHideNav}
                    className={styles.header_btn}
                    src="\assets\shared\icon-close.svg"
                    alt="close"
                    width={24}
                    height={24}
                />
            }
            <nav className={classNameNav}>
                <ul>
                    <li><a className={styles.selected}><b>00</b>Home</a></li>
                    <li><a><b>01</b>Destination</a></li>
                    <li><a><b>02</b>Crew</a></li>
                    <li><a><b>03</b>Technology</a></li>
                </ul>
            </nav>
        </header>
    )
} 