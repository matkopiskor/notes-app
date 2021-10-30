import { FC } from 'react';
import styles from './styles.module.css';

interface INewNoteProps {
    onClick: () => void;
};

export const NewNote: FC<INewNoteProps> = ({ onClick }) => {
    return (
        <div className={styles.newNote} onClick={onClick}>+</div>
    );
};
