import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
import { links } from "../../../../constants"

export default function NavBar() {
    return(
        <nav className={styles.nav}>
            <Link to="/" className={styles.hotelName}>
                hotel name
            </Link>
            <ul className={styles.links}>
                {
                    links
                    .map(link => {
                        return(
                            <a href={`#${link.to}`} key={link.value} className={styles.link}>
                                <span>{ link.value }</span>
                            </a>
                        )
                    })
                }
            </ul>
            <button type="button" className={styles.button}>
                sign in
            </button>
        </nav>
    )
}