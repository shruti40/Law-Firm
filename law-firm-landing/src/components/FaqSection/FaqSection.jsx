import React, {useState} from "react";
import styles from "./FaqSection.module.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function FaqSection () {

    const [show, setShow] = useState(false);

    const data = [
        {"question": "Do I need a personal injury report?",
        "answer":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}, 
        {"question": "How much is my case worth?",
        "answer":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}, 
        {"question": "What should I do right after car accidect",
        "answer":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}, 
        {"question": "How much is my case worth?",
        "answer":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."}, 
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1>FAQ</h1>
                <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</h6>
            </div>
            <div className={styles.right}>
                {
                    data.map((item, index) => (
                        <div className={styles.right}>
                            <h5 className={styles.question} onClick={() => setShow(!show, index)}>{item.question} <AddCircleIcon/></h5>
                            <h6 className={styles.answer} id={`child-color-${index}`} style={{ display: (show ? 'block' : 'none') }}>{item.answer}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FaqSection;