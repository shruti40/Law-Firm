import React from "react";
import styles from "./TeamSection.module.css";
import Img1 from "../../assets/TeamMember-1.png";
import Img2 from "../../assets/TeamMember-2.png";
import Img3 from "../../assets/TeamMember-3.png";
import Img4 from "../../assets/TeamMember-4.png";
import Img5 from "../../assets/TeamMember-5.png";
import Img6 from "../../assets/TeamMember-6.png";
import TeamMember from "../TeamMember/TeamMember";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeamSection () {

    const data = [
        {
            "image": Img1,
            "name": "Danial Def",
            "cases": "301 Cases"
        },
        {
            "image": Img2,
            "name": "Sanfole",
            "cases": "850 Cases"
        },
        {
            "image": Img3,
            "name": "Cesforila",
            "cases": "407 Cases"
        },
        {
            "image": Img4,
            "name": "Colleen",
            "cases": "301 Cases"
        },
        {
            "image": Img5,
            "name": "Haldone",
            "cases": "180 Cases"
        },
        {
            "image": Img6,
            "name": "",
            "cases": "350 Cases"
        }
    ]

    return (
        <div className={styles.wrapper}>
        <h1>Our Team</h1>
        <div className={styles.items}>
            <Row>
                {data.map((card) => (
                    <Col sm={4}>
                        <TeamMember card={card}/>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    )
}

export default TeamSection;