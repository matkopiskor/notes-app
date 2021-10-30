import { FC, useState } from 'react';
import styles from './styles.module.css';
import Back from '../../assets/svg/back.svg';
import Delete from '../../assets/svg/delete.svg';
import Save from '../../assets/svg/save.svg';
import Edit from '../../assets/svg/edit.svg';
import ReactMarkdown from 'react-markdown';
import { defaultNoteContent } from '../../utils/constants/defaultNoteContent';

interface INoteDetailsProps {
    noteId?: number;
    closeModal: () => void;
    mode?: 'view' | 'edit';
}

export const NoteDetails: FC<INoteDetailsProps> = ({ closeModal, noteId, mode='edit' }) => {

    const [modalMode, setModalMode] = useState(mode);

    return (
        <div className={styles.noteDetailsWrapper} onClick={closeModal}>
            <div className={styles.noteDetails} onClick={(e) => e.stopPropagation()}>
                <div className={styles.actionsRow}>
                    <img src={Back} alt="Back action" className={styles.action} title="Back" onClick={closeModal} />
                    {modalMode === 'edit'
                        ? <img src={Save} alt="Save action" className={styles.action} title="Save" />
                        : <img src={Edit} alt="Edit action" className={styles.action} title="Edit" onClick={() => setModalMode('edit')} />
                    }
                    {!!noteId &&
                        <img src={Delete} alt="Delete action" className={styles.action} title="Edit" />
                    }
                </div>
                <div className={styles.details}>
                    {modalMode === 'edit'
                        ? <EditMode/>
                        : <ViewMode/>
                    }
                </div>
            </div>
        </div>
    );
};

const EditMode: FC = () => {
    return (
            <textarea defaultValue={defaultNoteContent} style={{ width: '100%', height: '100%' }}></textarea>
    );
};

const ViewMode: FC = () => {
    return (
        <ReactMarkdown>{defaultNoteContent}</ReactMarkdown>
    )
};
