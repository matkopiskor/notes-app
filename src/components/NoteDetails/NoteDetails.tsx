import { FC, useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useNotes, useNotesModal } from '../../utils/notesModule';
import { NoteDetailsEditMode } from './components/NoteDetailsEditMode';
import { NoteDetailsViewMode } from './components/NoteDetailsViewMode';
import { NoteDetailsBackButton } from './components/NoteDetailsBackButton';
import { NoteDetailsSaveButton } from './components/NoteDetailsSaveButton';
import { NoteDetailsEditButton } from './components/NoteDetailsEditButton';
import { NoteDetailsDeleteButton } from './components/NoteDetailsDeleteButton';

export const NoteDetails: FC = () => {
    const { notesDetailsId } = useNotesModal();
    const noteId = notesDetailsId as number;
    const [value, setValue] = useState<string>('');
    const { get } = useNotes();
    const { modalMode } = useNotesModal();

    useEffect(() => {
        const note = get(noteId);
        setValue(note.source);
    }, [get, noteId]);

    return (
        <div className={styles.noteDetailsWrapper}>
            <div className={styles.noteDetails}>
                <div className={styles.actionsRow}>
                    <NoteDetailsBackButton />
                    {modalMode === 'edit' ? (
                        <NoteDetailsSaveButton value={value}  />
                    ) : (
                        <NoteDetailsEditButton />
                    )}
                    <NoteDetailsDeleteButton />
                </div>
                <div className={styles.details}>
                    {modalMode === 'edit' ? (
                        <NoteDetailsEditMode value={value} setValue={setValue} />
                    ) : (
                        <NoteDetailsViewMode value={value} />
                    )}
                </div>
            </div>
        </div>
    );
};
