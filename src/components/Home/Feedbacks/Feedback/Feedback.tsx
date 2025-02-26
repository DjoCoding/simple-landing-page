import styles from "./Feedback.module.css"

interface FeedBackProps {
    index: number;
    total: number;
    image: string;
    feedback: string;
}

function Circle({ isCurrent }: { isCurrent: boolean }) {
    return(
        <div className={styles.circle}
            style={{
                opacity: isCurrent ? 1 : 0.5
            }}
        >
        </div>
    )
}

function Circles({ total, current }: { total: number, current: number }) {
    let v = total < 4 ? total : 4;
    const circles = [];
    for(let i = 0; i < v; ++i) {
        circles.push(<Circle isCurrent={current == i} />)
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px"
            }}
        >
            {
                circles
            }
        </div>
    )
}

export default function Feedback({ index, image, feedback, total }: FeedBackProps) {
    return(
        <div 
            className={styles.container} 
            style={{
                backgroundImage: `url("${image}")`
            }}
        >
            <p className={styles.text}>
                "{ feedback }"
            </p>
            <div>
                <Circles total={total} current={index} />
            </div>
        </div>
    )
}
