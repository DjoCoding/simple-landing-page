import { Link } from "react-router-dom"
import styles from "./Right.module.css"

export default function Right() {
    return(
        <div className={styles.container}>
            <button className={styles.button} type="button">
                book now
            </button>
            <div className={styles.followUs}>
                <p>
                    Follow Us
                </p>
                <div className={styles.links}>
                    <Link to=""></Link>
                    <Link to=""></Link>
                    <Link to=""></Link>
                </div>
            </div>
        </div>
    )
}