import styles from "./styles/Crew.module.css";
import Image from "next/image";

export default function Crew() {
    return(
        <div className={styles.crew}>
            <h3><span>02</span>Meet your crew</h3>
            <div className={styles.crew_content}>
                <div className={styles.crew_content_description}>
                    <div>
                        <span>Commander</span>
                        <h2>Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </div>
                    <nav>
                        <ul>
                            <li className={styles.selected}></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.crew_img_container}>
                    <Image 
                        src="/assets/crew/image-douglas-hurley.webp"
                        alt="Douglas Hurley"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
} 