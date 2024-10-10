import React from 'react';
import Todo from '../../todo/Todo';
import styles from '../styles/TodosPage.module.css';

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.todosPage}>
            <h1>Todos</h1>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default TodosPage;
