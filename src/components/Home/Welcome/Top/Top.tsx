import styles from "./Top.module.css"

export default function Top() {
    return(
        <div className={styles.container}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/a162/1486/23710feef2a9ad7a9cf6c20d280fda4a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QdVTndBgfbeilu9YdALsyqNfPXX~jEgx8QW4wty7wZBNGgJ5xsPH1chgJJSHyCf48C7P2PA2zu-XpmLdrHbUFmk4Q3AfMa4SGHH6Zr6t~RvlIKEOFqtrlCHq8sY4ZI350H1loZK-oASMLgvHG2SNa0~cLU5w-3WLJ7vE1EoNVdw0PqzI0DtNZu4rQVnh4hWOGi0eaTJgpuRBWwXnSi87eFtbOw0FCAoLMYR708evNdjKs-V~FVjuOlRxDWEaKk6kwRFF-UBrh9Jihwm~7xApI8TySTX0l3v6MHyG-ysXi1~sMTIvAo7NuGbV3xdOwV6WNN15eYDrEHTzOCGZ7Z6qHQ__"
                alt="wheat"
                className={styles.image}
            />
            <p className={styles.text}>
                Welcome to our booking platform, where comfort meets convenience.Discover stays from cozy retreats to luxurious escapes.Whether for business, romance, or family,
                book your stay today!
            </p>
        </div>
    )
}