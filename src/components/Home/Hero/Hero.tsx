import Content from "./Content/Content"
import styles from "./Hero.module.css"
import NavBar from "./NavBar/NavBar"

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.heroOverlay}></div>
           <div className={styles.container}>
                <NavBar />
                <Content />
           </div>
        </section>
    )
}