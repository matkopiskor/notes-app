import { FC } from 'react';
import styles from './styles.module.css';

interface INoteProps {
    id: number;
}

export const Note: FC<INoteProps> = ({ id }) => {
    return (
        <div className={styles.note}></div>
    )
};
