import styles from '../styles.module.css';
import Save from '../../../assets/svg/save.svg';
import { FC, useCallback } from 'react';
import { useNotes, useNotesModal } from '../../../utils/notesModule';

interface INoteDetailsSaveButtonProps {
    value: string;
}

export const NoteDetailsSaveButton: FC<INoteDetailsSaveButtonProps> = ({ value }) => {
    const { save } = useNotes();
    const { setModalMode, notesDetailsId } = useNotesModal();

    const saveNote = useCallback(() => {
        save(notesDetailsId as number, value);
        setModalMode('view');
    }, [notesDetailsId, save, setModalMode, value]);

    return <img src={Save} alt="Save action" className={styles.action} title="Save" onClick={saveNote} />;
};
