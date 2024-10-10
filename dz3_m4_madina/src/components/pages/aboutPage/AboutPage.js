import React from 'react';
import Description from "../../description/Description";
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
    const descriptionProps = { title: "Title 2", description: "description 2" };
    return (
        <div className={styles.aboutPage}>
            <h1>About this Page</h1>
            <Description content={descriptionProps} />
        </div>
    );
};

export default AboutPage;
