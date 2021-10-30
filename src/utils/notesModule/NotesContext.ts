import { createContext } from 'react';
import { INote } from './Note';

interface INotesContext {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
};

export const NotesContext = createContext({} as INotesContext);
