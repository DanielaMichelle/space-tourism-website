import styles from "./styles/Destination.module.css";
import Image from "next/image";

export default function Destination() {
    return(
        <div className={styles.destination}>
            <h3><span>01</span>Pick your destination</h3>
            <div className={styles.destination_content}>
                <div className={styles.destination_img_container}>
                    <Image 
                        src="/assets/destination/image-moon.webp"
                        alt="moon"
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.destination_description}>
                    <nav className={styles.destination_navbar}>
                        <ul>
                            <li className={styles.selected}>Moon</li>
                            <li>Mars</li>
                            <li>Europa</li>
                            <li>Titan</li>
                        </ul>
                    </nav>
                    <h2>Moon</h2>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <hr></hr>
                    <div className={styles.destination_description_extra}>
                        <div>
                            <span className={styles.title}>Avg. distance</span>
                            <span className={styles.value}>384,400 km</span>
                        </div>
                        <div>
                            <span className={styles.title}>Est. travel time</span>
                            <span className={styles.value}>3 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 