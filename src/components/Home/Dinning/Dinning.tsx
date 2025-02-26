import styles from "./Dinning.module.css"
import Left from "./Left/Left"
import Right from "./Right/Right"

export default function Dinning() {
    return(
        <section className={styles.container}>
            <div>
                <Left />
                <Right />
            </div>
        </section>
    )
}