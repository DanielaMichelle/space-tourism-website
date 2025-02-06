import styles from "./styles/Home.module.css";

export default function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.home_content}>
                <span>So, you want to travel to</span>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className={styles.home_btnEffect}>
                <button>Explore</button>
            </div>
        </div>
    )
} 