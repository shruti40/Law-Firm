import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

function Navbar() {
    const menus = ["Home", "Attorneys", "Practice Areas", "About Us"]

    return (
        <div className={styles.navbar}>
             <a href={"/"}>
                <Logo/>
            </a>
            <Menu menus={menus}></Menu>
            <Button>Contact Now</Button>
        </div>
    )
}

export default Navbar;