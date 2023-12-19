import React from "react";
import styles from "./Choose.module.css";
import ChooseItem from "../ChooseItem/ChooseItem";

function Choose () {

    const data = [
        {
            "success_rate": "98%",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            "success_rate": "100%",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            "success_rate": "100%",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        }
    ]

    return (
        <>
            <div className={styles.wrapper}>
                <h1>Why Choose us?</h1>
                <div className={styles.items}> 
                    {data.map((card) => (
                        <ChooseItem card={card}></ChooseItem>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Choose;