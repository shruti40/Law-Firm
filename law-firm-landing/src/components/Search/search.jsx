import React from "react";
import styles from "./Search.module.css"
import EmailIcon from '@mui/icons-material/Email';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

function Search({placeholder}) {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>

            <OutlinedInput 
                className={styles.wrapper}
                placeholder={placeholder}
                id="outlined-adornment-amount"
                startAdornment={
                    <InputAdornment position="start" label={placeholder}><EmailIcon className={styles.icon}></EmailIcon></InputAdornment>
                }
                endAdornment={
                    <button className={styles.button}>
                        Let's Talk
                    </button>
                }
            />

        </form>
    )
}

export default Search;