import { FC, useCallback, useState } from 'react';
import styles from './styles.module.css';
import Back from '../../assets/svg/back.svg';
import Delete from '../../assets/svg/delete.svg';
import Save from '../../assets/svg/save.svg';
import Edit from '../../assets/svg/edit.svg';
import ReactMarkdown from 'react-markdown';
import { INote } from '../../utils/notesModule/Note';

interface INoteDetailsProps {
    note: INote;
    mode: 'view' | 'edit';
    saveNote: (id: number, value: string) => void;
    changeModeToEdit: () => void;
    deleteNote: (id: number) => void;
    closeModal: () => void;
}

export const NoteDetails: FC<INoteDetailsProps> = (props) => {
    const {
        mode,
        closeModal,
        note: { id, source },
        saveNote,
        changeModeToEdit,
        deleteNote,
    } = props;
    const [value, setValue] = useState(source);

    const onSaveClick = useCallback(() => saveNote(id, value), [id, saveNote, value]);
    const onDeleteClick = useCallback(() => deleteNote(id), [deleteNote, id]);

    return (
        <div className={styles.noteDetailsWrapper} onClick={closeModal}>
            <div className={styles.noteDetails} onClick={(e) => e.stopPropagation()}>
                <div className={styles.actionsRow}>
                    <img src={Back} alt="Back action" className={styles.action} title="Back" onClick={closeModal} />
                    {mode === 'edit' ? (
                        <img
                            src={Save}
                            alt="Save action"
                            className={styles.action}
                            title="Save"
                            onClick={onSaveClick}
                        />
                    ) : (
                        <img
                            src={Edit}
                            alt="Edit action"
                            className={styles.action}
                            title="Edit"
                            onClick={changeModeToEdit}
                        />
                    )}
                    <img
                        src={Delete}
                        alt="Delete action"
                        className={styles.action}
                        title="Delete"
                        onClick={onDeleteClick}
                    />
                </div>
                <div className={styles.details}>
                    {mode === 'edit' ? <EditMode value={value} setValue={setValue} /> : <ViewMode value={value} />}
                </div>
            </div>
        </div>
    );
};

interface IEditModeProps {
    value: string;
    setValue: (val: string) => void;
}

const EditMode: FC<IEditModeProps> = ({ value, setValue }) => {
    const onChange = useCallback(
        (e) => {
            setValue(e.targetValue);
        },
        [setValue]
    );
    return <textarea value={value} onChange={onChange} style={{ width: '100%', height: '100%' }}></textarea>;
};

interface IViewModeProps {
    value: string;
}

const ViewMode: FC<IViewModeProps> = ({ value }) => {
    return <ReactMarkdown>{value}</ReactMarkdown>;
};
