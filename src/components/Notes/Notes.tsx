import { FC, useCallback } from 'react';
import { defaultNoteContent } from '../../utils/constants/defaultNoteContent';
import { useNotes } from '../../utils/notesModule';
import { NewNote } from '../NewNote/NewNote';
import { Note } from '../Note/Note';
import { NoteDetails } from '../NoteDetails/NoteDetails';
import { useNoteDetails } from '../NoteDetails/useNoteDetails';
import styles from './styles.module.css';

export const Notes: FC = () => {
    const { close, isOpen, noteId, open, mode, changeMode } = useNoteDetails();
    const { getAllIds, add, get, save, remove } = useNotes();

    const openNewNote = useCallback(() => {
        const id = add(defaultNoteContent);
        open(id, 'edit');
    }, [add, open]);

    const openExistingNote = useCallback(
        (id) => {
            open(id, 'view');
        },
        [open]
    );

    const saveNote = useCallback((noteId: number, value: string) => {
        save(noteId, value);
        changeMode('view');
    }, [changeMode, save]);

    const changeModeToEdit = useCallback(() => changeMode('edit'), [changeMode]);

    const deleteNote = useCallback((noteId: number) => {
        close();
        remove(noteId);
    }, [close, remove]);

    return (
        <>
            <div className={styles.notes}>
                <NewNote onClick={openNewNote} />
                {getAllIds().map((id) => (
                    <Note key={id} note={get(id)} onClick={openExistingNote} />
                ))}
            </div>
            {isOpen && (
                <NoteDetails
                    note={get(noteId as number)}
                    mode={mode}
                    saveNote={saveNote}
                    changeModeToEdit={changeModeToEdit}
                    deleteNote={deleteNote}
                    closeModal={close}
                />
            )}
        </>
    );
};
