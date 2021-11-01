import { FC, useCallback } from 'react';

interface INoteDetailsEditModeProps {
    value: string;
    setValue: (val: string) => void;
}

export const NoteDetailsEditMode: FC<INoteDetailsEditModeProps> = ({ value, setValue }) => {
    const onChange = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue]
    );
    return <textarea value={value} onChange={onChange} style={{ width: '100%', height: '100%' }}></textarea>;
};