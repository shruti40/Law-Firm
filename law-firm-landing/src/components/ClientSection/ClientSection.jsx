import React from "react";
import styles from "./ClientSection.module.css";
import Img1 from "../../assets/Client-1.png";
import Img2 from "../../assets/Client-2.png";
import Img3 from "../../assets/Client-3.png";
import Client from "../Client/Client";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


function ClientSection () {

    const data = [
        {
            "image": Img1,
            "name": "Jane Cooper",
            "profession": "Ceo of Hunt",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
        },
        {
            "image": Img2,
            "name": "Jane Cooper",
            "profession": "Ceo of Hunt",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
        },
        {
            "image": Img3,
            "name": "Jane Cooper",
            "profession": "Ceo of Hunt",
            "desc": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia"
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.upper}>
                <h1 className={styles.heading}>What says our happy Clients</h1>
                <div className={styles.image_section}>
                    <div className={styles.image_bg}>
                        <EastIcon/>
                    </div>
                    <div className={styles.image_bg}>
                        <WestIcon/>
                    </div>
                </div>
            </div>
            <div className={styles.items}> 
                    {data.map((card) => (
                    <Client card={card}></Client>
                ))}
            </div>
        </div>
    )
}

export default ClientSection;