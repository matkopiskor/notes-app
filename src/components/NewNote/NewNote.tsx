import { FC, useCallback } from 'react';
import { useNotes, useNotesModal } from '../../utils/notesModule';
import styles from './styles.module.css';

const defaultNoteContent = `This is a note
===========
&nbsp;  
Subtitle
------------
&nbsp;  
Shopping list:
* apples
* oranges
* toilet paper
`;

export const NewNote: FC = () => {
    const { add } = useNotes();
    const { setNotesDetailsId, setModalMode } = useNotesModal();

    const createAndOpenNewNote = useCallback(() => {
        const id = add(defaultNoteContent);
        setModalMode('edit');
        setNotesDetailsId(id);
    }, [add, setModalMode, setNotesDetailsId]);
    return (
        <div className={styles.newNote} onClick={createAndOpenNewNote}>+</div>
    );
};
