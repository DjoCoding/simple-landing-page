import { feedbacks } from "../../../constants"
import Feedback from "./Feedback/Feedback"
import styles from "./Feedbacks.module.css"

export default function Feedbacks() {
    return( 
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                {
                    feedbacks
                    .map(({ feedback, image}, i) => {
                        return(
                            <div className={styles.feedbackContainer}>
                                <Feedback index={i} feedback={feedback} total={feedbacks.length} image={image} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}