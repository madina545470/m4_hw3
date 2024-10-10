import React from 'react';
import styles from '../styles/Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <div className={styles.todo}>
            {todo}
        </div>
    );
};

export default Todo;
