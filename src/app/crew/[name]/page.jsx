"use client";
import styles from "../Crew.module.css";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import Data from "../../../../data.json";
import Link from "next/link";

export default function Crew() {
    const [crew, setCrew] = useState(Data.crew);
    const memberName = useParams().name;
    const memberSelected = crew.find(member => member.name.replace(/\s+/g, '') === memberName);

    return(
        <div className={styles.crew}>
            <h3><span>02</span>Meet your crew</h3>
            <div className={styles.crew_content}>
                <div className={styles.crew_content_description}>
                    <div>
                        <span>{memberSelected.role}</span>
                        <h2>{memberSelected.name}</h2>
                        <p>{memberSelected.bio}</p>
                    </div>
                    <nav>
                        <ul>
                            <Link href="/crew/DouglasHurley" className={`${(memberName === "DouglasHurley") ? `${styles.link} ${styles.selected}` : styles.link}`}></Link>
                            <Link href="/crew/MarkShuttleworth" className={`${(memberName === "MarkShuttleworth") ? `${styles.link} ${styles.selected}` : styles.link}`}></Link>
                            <Link href="/crew/VictorGlover" className={`${(memberName === "VictorGlover") ? `${styles.link} ${styles.selected}` : styles.link}`}></Link>
                            <Link href="/crew/AnoushehAnsari" className={`${(memberName === "AnoushehAnsari") ? `${styles.link} ${styles.selected}` : styles.link}`}></Link>
                        </ul>
                    </nav>
                </div>
                <div className={styles.crew_img_container}>
                    <Image 
                        src={memberSelected.images.webp.slice(1)}
                        alt={memberSelected.name}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
} 