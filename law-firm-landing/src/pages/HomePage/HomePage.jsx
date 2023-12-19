import React from "react";
import Hero from "../../components/Hero/Hero";
import Introduction from "../../components/Introduction/Introduction";
import Choose from "../../components/Choose/Choose";
import PracticeArea from "../../components/PracticeArea/PracticeArea";
import ClientSection from "../../components/ClientSection/ClientSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import styles from "./HomePage.module.css";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    return (
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Introduction/>
                <Choose/>
                <PracticeArea/>
                <ClientSection/>
                <TeamSection/>
                <FaqSection/>
                <NewsLetter/>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;