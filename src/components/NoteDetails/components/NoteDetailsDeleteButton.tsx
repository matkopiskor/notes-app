import styles from '../styles.module.css';
import Delete from '../../../assets/svg/delete.svg';
import { FC, useCallback } from 'react';
import { useNotes, useNotesModal } from '../../../utils/notesModule';

export const NoteDetailsDeleteButton: FC = () => {
    const { setNotesDetailsId, notesDetailsId } = useNotesModal();
    const { remove } = useNotes();

    const deleteNote = useCallback(() => {
        remove(notesDetailsId as number);
        setNotesDetailsId(undefined);
    }, [notesDetailsId, remove, setNotesDetailsId]);

    return <img
        src={Delete}
        alt="Delete action"
        className={styles.action}
        title="Delete"
        onClick={deleteNote}
    />;
};
