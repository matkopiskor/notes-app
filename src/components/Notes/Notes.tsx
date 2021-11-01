import { FC } from 'react';
import { useNotes, useNotesModal } from '../../utils/notesModule';
import { NewNote } from '../NewNote/NewNote';
import { Note } from '../Note/Note';
import { NoteDetails } from '../NoteDetails/NoteDetails';
import styles from './styles.module.css';

export const Notes: FC = () => {
    const { getAllIds } = useNotes();
    const { isModalOpen } = useNotesModal();

    return (
        <>
            <div className={styles.notes}>
                <NewNote />
                {getAllIds().map((id) => (
                    <Note key={id} noteId={id} />
                ))}
            </div>
            {isModalOpen && (
                <NoteDetails />
            )}
        </>
    );
};
