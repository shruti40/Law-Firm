import React from "react";
import styles from "./Introduction.module.css";

function Introduction () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>Let’s Introduce Ourself</h1>
            </div>
            <div className={styles.right}>
                <h2>Criminal Lawyer</h2>
                <h6>Amet minim mollit non deserunt ullamco est
                     sit aliqua dolor do amet sint. Velit officia consequatduis
                      enim velit mollit Exercitation.</h6>
            </div>
        </div>
    )
}

export default Introduction;