import styles from "./Home.module.css"
import Hero from "../../components/Home/Hero/Hero"
import Welcome from "../../components/Home/Welcome/Welcome"
import Accomodations from "../../components/Home/Accomodations/Accomodations"
import Dinning from "../../components/Home/Dinning/Dinning"
import Feedbacks from "../../components/Home/Feedbacks/Feedbacks"
import AboutUs from "../../components/Home/AboutUs/AboutUs"

export default function Home() {
    return(
        <div className={styles.page}>
            <Hero />
            <Welcome />
            <Accomodations />
            <Dinning />
            <Feedbacks />
            <AboutUs />
        </div>
    )
}