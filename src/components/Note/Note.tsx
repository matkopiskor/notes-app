import { FC, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNotes, useNotesModal } from '../../utils/notesModule';
import styles from './styles.module.css';

interface INoteProps {
    noteId: number;
}

export const Note: FC<INoteProps> = ({ noteId }) => {
    const { get } = useNotes();
    const { setNotesDetailsId, setModalMode } = useNotesModal();

    const { id, source } = useMemo(() => {
        return get(noteId);
    }, [get, noteId]);

    const openNote = useCallback(() => {
        setModalMode('view');
        setNotesDetailsId(id);
    }, [id, setModalMode, setNotesDetailsId]);

    return (
        <div className={styles.note} onClick={openNote}>
            <ReactMarkdown sourcePos className={styles.noteContent}>
                {source}
            </ReactMarkdown>
        </div>
    );
};
