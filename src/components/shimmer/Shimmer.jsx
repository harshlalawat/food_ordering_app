import React from 'react';
import styles from './shimmer.module.css';
import { Card } from '../card';

const Shimmer = ()=>{
    return (
        <div className={styles.shimmer_card_container}>
            <div className={styles.shimmer_card_image} src="" />
            <div className={styles.shimmer_content}></div>
            <div className={styles.shimmer_content}></div>
            <div className={styles.shimmer_content}></div>
            <div className={styles.shimmer_content}></div>
        </div>
    )
}

export default Shimmer;