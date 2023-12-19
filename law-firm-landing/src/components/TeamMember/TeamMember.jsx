import React from "react";
import styles from "./TeamMember.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeamMember ({card}) {

    const { image, name, cases } = card;

    return (
        <div className={styles.box}>
            <div>
                <img src={image} alt="logo" width={50} height={50} />
            </div>
            <div>
                <h6 className={styles.name}> {name} </h6>
                <h6 className={styles.desc}> {cases} </h6>
            </div>
        </div>
    )
}

export default TeamMember;