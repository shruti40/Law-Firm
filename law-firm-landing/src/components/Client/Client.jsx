import React from "react";
import styles from "./Client.module.css";

function Client ({card}) {

    const { image, name, profession, desc } = card;

    return (
        <div className={styles.box}>
            <img src={image} alt="logo" width={50} height={50} />
            <h4 className={styles.name}> {name} </h4>
            <h6 className={styles.name}> {profession} </h6>
            <h6 className={styles.desc}> {desc} </h6>
        </div>
    )
}

export default Client;