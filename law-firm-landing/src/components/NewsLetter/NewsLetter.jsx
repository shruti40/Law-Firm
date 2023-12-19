import React from "react";
import styles from "./NewsLetter.module.css";
import TextField from '@mui/material/TextField';

function NewsLetter () {
    return (
        <div className={styles.wrapper}>
            <h1>Subscribe Our Newsletter</h1>
            <div className={styles.subscribe}>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                    className={styles.textfield}
                    placeholder="Name"
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                    className={styles.textfield}
                    placeholder="Enter your Email"
                />
                <button className={styles.button}>
                    SEND
                </button>
            </div>
        </div>
    )
}

export default NewsLetter;