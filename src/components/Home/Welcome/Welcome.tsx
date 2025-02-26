import Bottom from "./Bottom/Bottom"
import Top from "./Top/Top"
import styles from "./Welcome.module.css"

export default function Welcome() {
    return(
        <section className={styles.welcome}>
            <Top />
            <Bottom />
        </section>
    )
}