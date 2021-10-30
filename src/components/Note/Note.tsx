import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { INote } from '../../utils/notesModule/model';
import styles from './styles.module.css';

interface INoteProps {
    note: INote;
    onClick: (id: number) => void;
}

export const Note: FC<INoteProps> = ({ note, onClick }) => {
    const { id, source } = note;
    return (
        <div className={styles.note} onClick={() => onClick(id)}>
            <ReactMarkdown sourcePos className={styles.noteContent}>{source}</ReactMarkdown>
        </div>
    )
};
