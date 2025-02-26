import styles from "./Content.module.css"

export default function Content() {
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.headline}>
                    where every moment feels like home
                </h1>
                <p className={styles.subHeadline}>
                    Experience comfort and luxury at our hotel, where every stay is unforgettable.
                    From elegant rooms to world-class amenities, your perfect getaway awaits.
                </p>
                <div className={styles.call}>
                    <button type="button" className={styles.button}>
                        book now
                    </button>
                    <button type="button" className={styles.more}>
                        <p>
                            learn more
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}