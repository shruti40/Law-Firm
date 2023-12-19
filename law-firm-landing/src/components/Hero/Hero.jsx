import React from "react";
import styles from './Hero.module.css';
import Search from '../Search/search';

function Hero () {
    return (
        <div className={styles.hero}>
            <div>
                <h1> You don’t have to </h1>
                <h1> Fight them Alone. </h1>
                <div className={styles.opacity}> 
                    <h6> Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, </h6>
                    <h6>  curabitur sodales conubia ut inceptos faucibus himenaeos tortor  </h6>
                    <h6>  eget, hac massa gravida arcu interdum proin curae.</h6>
                </div>
                <Search placeholder="Enter your eamil address" />
            </div>
            <div>
                <img   
                    src={require('../../assets/User.png')}
                    width={212}
                    alt="user"
                />
            </div>

            
        </div>
    )
}

export default Hero;