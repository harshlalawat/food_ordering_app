import React from 'react';
import styles from './cardContainer.module.css';
import { Card } from '../card/Card';
import Shimmer from '../shimmer/Shimmer';

const CardContainer = (props)=>{
    const {productsArray} = props;
    // console.log(productsArray);
    if(productsArray.length === 0){
        return (
            <div className={styles.card_container}>
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
            </div>
        )
    }
    return (
        <div className={styles.card_container}>
                {productsArray.map((element) => <Card key={element.productId} element = {element}/>)}
        </div>
    )
}

export default CardContainer;