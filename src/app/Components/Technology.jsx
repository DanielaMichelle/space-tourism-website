import styles from "./styles/Technology.module.css";
import Image from "next/image";
import { useMediaQuery } from '@react-hook/media-query'

export default function Technology() {
    const isTablet = useMediaQuery('(max-width: 769px)');
    return(
        <div className={styles.tech}>
            <h3><span>03</span>Space launch 101</h3>
            <div className={styles.tech_content}>
                <div className={styles.tech_description}>
                    <nav className={styles.tech_description_nav}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </nav>
                    <div className={styles.tech_description_text}>
                        <span>The terminology...</span>
                        <h2>Launch Vehicle</h2>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </div>
                <div className={styles.tech_container_img}>
                    <Image 
                        src={`/assets/technology/image-launch-vehicle-${isTablet ? `landscape` :  `portrait`}.jpg`}
                        alt="launch vehicle"
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
    )
} 