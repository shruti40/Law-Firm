import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Icon1 from "../../assets/Icon-1.png";
import Icon2 from "../../assets/Icon-2.png";
import Icon3 from "../../assets/Icon-3.png";
import Icon4 from "../../assets/Icon-4.png";


function Footer () {
    const menus = ["Home", "Attorneys", "Practice Areas", "About Us"]

    return (
        <div className={styles.wrapper}>
            <div className={styles.upper}>
                <a href={"/"}>
                    <Logo/>
                </a>
                <Menu menus={menus}></Menu>
                <div className={styles.images}>
                    <img src={Icon1} alt="logo" width={20} />
                    <img src={Icon2} alt="logo" width={20} />
                    <img src={Icon3} alt="logo" width={20} />
                    <img src={Icon4} alt="logo" width={20} />
                </div>
            </div>
            <div className={styles.lower}>
                <div>© 2020 Acme. All right reserved.</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
            </div>
        </div>
    )
    
}

export default Footer;