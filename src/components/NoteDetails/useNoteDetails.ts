import { useMemo, useState } from 'react';


export const useNoteDetails = () => {
    const [noteId, setNoteId] = useState<number | undefined>(undefined);
    const [mode, setMode] = useState<'view' | 'edit'>('view');

    const close = () => {
        setNoteId(undefined);
    };

    const open = (id: number, modalMode: 'view' | 'edit') => {
        setMode(modalMode);
        setNoteId(id);
    };

    const isOpen = useMemo(() => noteId !== undefined, [noteId]);

    const changeMode = (modalMode: 'view' | 'edit') => {
        setMode(modalMode);
    }

    return {
        noteId,
        close,
        open,
        isOpen,
        mode,
        changeMode,
    };
};
