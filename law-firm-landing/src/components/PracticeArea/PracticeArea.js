import React from "react";
import styles from "./PracticeArea.module.css";
import Image1 from "../../assets/Practice-1.png";
import Image2 from "../../assets/Practice-2.png";
import Image3 from "../../assets/Practice-3.png";
import Image4 from "../../assets/Practice-4.png";
import Image5 from "../../assets/Practice-5.png";
import Image6 from "../../assets/Practice-6.png";



function PracticeArea () {

    const data = [Image1, Image2, Image3, Image4, Image5, Image6];

    return (
        <div className={styles.area}>
            <h1>Area of Practices</h1>
            <div className={styles.wrapper}>
                {
                    data.map((image) => (
                        <img alt="practiceImage" src={image} />
                    ))
                }
            </div>
        </div>
    )
}

export default PracticeArea;