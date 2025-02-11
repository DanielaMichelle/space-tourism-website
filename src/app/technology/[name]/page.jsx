"use client";
import styles from "../Technology.module.css";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query"; 
import { useState } from "react";
import { useParams } from "next/navigation";
import Data from "../../../../data.json";
import Link from "next/link";

export default function Technology() {
    const [technologies, setTechnologies] = useState(Data.technology);
    const technologyName = useParams().name;
    const technologySelected = technologies.find(tech => tech.name.replace(/\s+/g, '') === technologyName);
    
    const isTablet = useMediaQuery('(max-width: 769px)');
    return(
        <div className={styles.tech}>
            <h3><span>03</span>Space launch 101</h3>
            <div className={styles.tech_content}>
                <div className={styles.tech_description}>
                    <nav className={styles.tech_description_nav}>
                        <Link href="/technology/Launchvehicle" className={`${(technologyName === "Launchvehicle") ? `${styles.link} ${styles.selected}` : styles.link}`}>1</Link>
                        <Link href="/technology/Spaceport" className={`${(technologyName === "Spaceport") ? `${styles.link} ${styles.selected}` : styles.link}`}>2</Link>
                        <Link href="/technology/Spacecapsule" className={`${(technologyName === "Spacecapsule") ? `${styles.link} ${styles.selected}` : styles.link}`}>3</Link>
                    </nav>
                    <div className={styles.tech_description_text}>
                        <span>The terminology...</span>
                        <h2>{technologySelected.name}</h2>
                        <p>{technologySelected.description}</p>
                    </div>
                </div>
                <div className={styles.tech_container_img}>
                    <Image 
                        src={isTablet ? technologySelected.images.landscape.slice(1) : technologySelected.images.portrait.slice(1) }
                        alt={technologySelected.name}
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
    )
} 