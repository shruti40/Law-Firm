import React from "react";
import styles from "./ChooseItem.module.css";
import GiftImage from "../../assets/Gift.png";

function ChooseItem ({card}) {
    const {success_rate, desc} = card;
    return (
        <div className={styles.box}>
            <img src={GiftImage} alt="logo" width={50} height={50} />
            <h4 className={styles.rate}> {success_rate} Success Rate </h4>
            <h6 className={styles.desc}> {desc} </h6>
            <button className={styles.button}>
                Read More
            </button>
        </div>
    )
}

export default ChooseItem;