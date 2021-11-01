import styles from '../styles.module.css';
import Edit from '../../../assets/svg/edit.svg';
import { FC, useCallback } from 'react';
import { useNotesModal } from '../../../utils/notesModule';

export const NoteDetailsEditButton: FC = () => {
    const { setModalMode } = useNotesModal();

    const changeModeToEdit = useCallback(() => setModalMode('edit'), [setModalMode]);

    return <img src={Edit} alt="Edit action" className={styles.action} title="Edit" onClick={changeModeToEdit} />;
};
