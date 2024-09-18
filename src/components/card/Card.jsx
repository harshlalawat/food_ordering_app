import React from "react";
import styles from './card.module.css';

export const Card = ({element})=>{
    const {name, price, rating, restaurantName} = element;
    return (
        <div className={styles.card_container}>
            <img className={styles.card_image} src="https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <h5>{restaurantName}</h5>
        </div>
    )
}
