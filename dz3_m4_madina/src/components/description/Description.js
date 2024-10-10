import React from 'react';
import styles from './Description.module.css';

const Description = ({ content }) => {
    return (
        <div className={styles.description}>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </div>
    );
};

export default Description;
