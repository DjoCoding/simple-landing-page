import { accomodations } from "../../../../constants"
import Item from "./Item/Item"
import styles from "./Links.module.css"

export default function Links() {
    return(
        <div className={styles.container}>
            {
                accomodations
                .map(({ value, image }) => {
                    return(
                        <Item value={value} image={image} />
                    )
                })
            }
        </div>
    )
}