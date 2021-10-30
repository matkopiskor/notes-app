import { FC, useCallback } from 'react';
import { useNotes } from '../../utils/notesModule/useNotes';
import { useModal } from '../../utils/useModal';
import { NewNote } from '../NewNote/NewNote';
import { Note } from '../Note/Note';
import { NoteDetails } from '../NoteDetails/NoteDetails';
import styles from './styles.module.css';

export const Notes: FC = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const { getAllIds } = useNotes();

    const openNewNote = useCallback(() => {
        openModal();
    }, [openModal]);
    return (
        <>
            <div className={styles.notes}>
                <NewNote onClick={openNewNote} />
                {getAllIds().map((id) => <Note id={id} />)}
            </div>
            {isModalOpen &&
                <NoteDetails closeModal={closeModal} />
            }
        </>
    );
};
