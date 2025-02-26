import styles from "./Bottom.module.css"

export default function Bottom() {
    return(
        <div className={styles.container}>
            <div className={styles.branches}>
                <p className={styles.text}>
                    find your perfect stay
                </p>
                <ul className={styles.branchesList}>
                    <li>
                        <p>
                            the hotel in algiers
                        </p>
                    </li>
                    <li>
                        <p>
                            the hotel in algiers
                        </p>
                        </li>
                    <li>
                        <p>
                            the hotel in annaba
                        </p>
                    </li>
                </ul>
                <a href="#accomodations" className={styles.link}>
                    accomodations
                </a>  
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src="https://s3-alpha-sig.figma.com/img/57ca/cbcb/567ec3c9daaef6951e83028b1828c750?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I56W4wuwWS-Wh0MbIPbVjYCp5eE1PAJuzIv8u5QaP~yrnrxMw~WZmyEDF1Gg~ZdbK1WUrkF-P-vh2by8zBgBGjY~kFPXgBAeliiixFOR2CV42l7F~DZ0cFnrYnGJxYowQ1duLCzrK5tWLfuz1gmmwgHGclSmDIe7MeuYOFHRQ2gVD~iRgzOTfaxIN4GbFdSpiVgnOQoywln0IYNcobUdTR549nHdVpYqrc7uoM5J65~Lt9x5ml~bl6vyQZHZlrRh0NhrNml5xaI5D-b9lNjojTUNFTcErY6EBx12y5Lb6PZ393wlYgeXPm3CDTIptDOUX~gHt5BU4EOW00gcDu21BQ__"
                    alt="proof picture"
                />
            </div>
        </div>
    )
}