import React from 'react';
import Description from '../../description/Description';
import styles from './MainPage.module.css';

const MainPage = () => {
    const descriptionProps = { title: "Title", description: "description" };
    return (
        <div className={styles.mainPage}>
            <h1>Main Page</h1>
            <Description content={descriptionProps} />
        </div>
    );
};

export default MainPage;
