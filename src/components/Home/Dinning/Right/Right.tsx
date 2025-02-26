import { Link } from "react-router-dom"
import styles from "./Right.module.css"

export default function Right() {
    return(
        <div className={styles.container}>
            <p className={styles.text}>
                delight in every bite
            </p>
            <ul className={styles.list}>
                <li>
                    <p>
                        the groumet spot
                    </p>
                </li>
                <li>
                    <p>
                        the golden plate
                    </p>
                    </li>
                <li>
                    <p>
                        the coffee nook
                    </p>
                </li>
            </ul>
            <Link to="/dinning" className={styles.link}>
                dinning
            </Link>  
        </div>
    )
}