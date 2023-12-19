import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

function Menu ({menus}) {
        
    return (
        <div className={styles.menu}>
            {
                menus.map((item)=> (
                    <MenuItem>{item}</MenuItem> 
                ))
            }
        </div>
    )
}

export default Menu;