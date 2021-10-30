import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { INote } from './model';

interface INotesContext {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
};

const NotesContext = createContext({} as INotesContext);

const NOTES_KEY = 'notes';

const initialState = JSON.parse(localStorage.getItem(NOTES_KEY) as string) ?? [];

export const NotesProvider: FC = ({ children }) => {
    const [notes, setNotes] = useState<INote[]>(initialState);

    useEffect(() => {
        localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const getAllIds = useCallback(() => notes.map(({ id }) => id), [notes]);

    const get = useCallback((id: number) => notes.find((note) => note.id === id) as INote, [notes]);

    const save = useCallback(
        (id: number, source: string) => {
            setNotes(notes.map((note) => (note.id === id ? { ...note, source } : note)));
        },
        [notes, setNotes]
    );

    const add = useCallback(
        (source: string) => {
            const id = (notes[notes.length - 1]?.id ?? -1) + 1;
            setNotes([...notes, { id, source }]);
            return id;
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
