import { useCallback, useContext } from 'react';
import { NotesContext } from './NotesContext';

export const useNotes = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const getAllIds = useCallback(() => notes.map(({ id }) => id), [notes]);

    const get = useCallback((id: number) => notes.find(({ id }) => id), [notes]);

    const save = useCallback(
        (id: number, source: string) => {
            setNotes(notes.map((note) => (note.id === id ? { ...note, source } : note)));
        },
        [notes, setNotes]
    );

    const add = useCallback(
        (source: string) => {
            setNotes([...notes, { id: notes.length, source }]);
        },
        [notes, setNotes]
    );

    const remove = useCallback((id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    }, [notes, setNotes]);

    return {
        getAllIds,
        get,
        save,
        add,
        remove,
    };
};
