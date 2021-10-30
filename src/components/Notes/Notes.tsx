import { FC } from 'react';
import { NewNote } from '../NewNote/NewNote';
import styles from './styles.module.css';

export const Notes: FC = () => {
    return (
        <div className={styles.notes}>
            <NewNote/>
        </div>
    );
};
