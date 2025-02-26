import styles from "./Center.module.css"

export default function Center() {
    return(
        <div className={styles.container}>
            <div className={styles.services}>
                <p className={styles.item}>accomodations</p>
                <p className={styles.item}>occasions</p>
                <p className={styles.item}>events</p>
                <p className={styles.item}>wellness</p>
                <p className={styles.item}>dinning</p>
            </div>
            <div>
                <p className={styles.item}>join us</p>
            </div>
        </div>
    )
}
