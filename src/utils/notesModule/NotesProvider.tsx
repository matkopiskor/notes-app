import { FC, useEffect, useState } from 'react';
import { INote } from '../models/Note';
import { NotesContext } from './NotesContext';

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
