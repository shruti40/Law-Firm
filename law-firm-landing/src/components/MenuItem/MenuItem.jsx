import React from "react";
import styles from "./MenuItem.module.css";

function MenuItem ({children}) {
    return (
        <div className={styles.menu_item}>
            {children}
        </div>
    )
}

export default MenuItem;