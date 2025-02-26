import styles from "./Item.module.css"

interface ItemProps {
    value: string;
    image: string;
}

export default function Item({ value, image }: ItemProps) {
    return(
        <div 
            className={styles.container}
            style={{
                backgroundImage: `url("${image}")`
            }}    
        >
            <div className={styles.containerOverlay} />
            <div className={styles.content}>
                <h2>{ value }</h2>
                <button type="button">
                    learn more
                </button>
            </div>
        </div>
    )
}