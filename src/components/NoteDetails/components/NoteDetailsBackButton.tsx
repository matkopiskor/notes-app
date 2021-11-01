import styles from '../styles.module.css';
import Back from '../../../assets/svg/back.svg';
import { useCallback } from 'react';
import { useNotesModal } from '../../../utils/notesModule';


export const NoteDetailsBackButton = () => {
    const { setNotesDetailsId  } = useNotesModal();

    const closeNote = useCallback(() => {
        setNotesDetailsId(undefined);
    }, [setNotesDetailsId]);
    return (
        <img src={Back} alt="Back action" className={styles.action} title="Back" onClick={closeNote} />
    );
};
