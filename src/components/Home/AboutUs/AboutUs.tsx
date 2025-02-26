import styles from "./AboutUs.module.css"
import Left from "./Left/Left"
import Center from "./Center/Center"
import Right from "./Right/Right"

export default function AboutUs() {
    return(
        <section className={styles.container}>
            <Left />
            <Center />
            <Right />
        </section>
    )
}