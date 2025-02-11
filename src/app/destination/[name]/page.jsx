"use client";

import styles from "../Destination.module.css";
import Image from "next/image";
import Data from "../../../../data.json";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Destination() {
    const [destinations, setDestinations] = useState(Data.destinations);
    const destinationName = useParams().name;
    const destinationSelected = destinations.find(destination => destination.name === destinationName);

    // let destinationSelected;
    // if (localStorage.getItem(destinationName.toString())) {
    //     console.log('consumiento de local storage');
        
    //     destinationSelected = JSON.parse(localStorage.getItem(destinationName));
    // } else {
    //     console.log("Guardando ...");
        
    //     destinationSelected = destinations.find(destination => destination.name === destinationName);
    //     if(destinationSelected.name === "Moon") localStorage.setItem('Moon', JSON.stringify(destinationSelected));
    //     if(destinationSelected.name === "Mars") localStorage.setItem('Mars', JSON.stringify(destinationSelected));
    //     if(destinationSelected.name === "Europa") localStorage.setItem('Europa', JSON.stringify(destinationSelected));
    //     if(destinationSelected.name === "Titan") localStorage.setItem('Titan', JSON.stringify(destinationSelected));
    // }

    return(
        <div className={styles.destination}>
            <h3><span>01</span>Pick your destination</h3>
            <div className={styles.destination_content}>
                <div className={styles.destination_img_container}>
                    <Image 
                        src={destinationSelected.images.webp.slice(1)}
                        alt={destinationSelected.name}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.destination_description}>
                    <nav className={styles.destination_navbar}>
                        <ul>
                            <Link href="/destination/Moon" className={`${(destinationName === "Moon") ? `${styles.link} ${styles.selected}` : styles.link}`}>Moon</Link>
                            <Link href="/destination/Mars" className={`${(destinationName === "Mars") ? `${styles.link} ${styles.selected}` : styles.link}`}>Mars</Link>
                            <Link href="/destination/Europa" className={`${(destinationName === "Europa") ? `${styles.link} ${styles.selected}` : styles.link}`}>Europa</Link>
                            <Link href="/destination/Titan" className={`${(destinationName === "Titan") ? `${styles.link} ${styles.selected}` : styles.link}`}>Titan</Link>
                        </ul>
                    </nav>
                    <h2>{destinationSelected.name}</h2>
                    <p>{destinationSelected.description}</p>
                    <hr></hr>
                    <div className={styles.destination_description_extra}>
                        <div>
                            <span className={styles.title}>Avg. distance</span>
                            <span className={styles.value}>{destinationSelected.distance}</span>
                        </div>
                        <div>
                            <span className={styles.title}>Est. travel time</span>
                            <span className={styles.value}>{destinationSelected.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 