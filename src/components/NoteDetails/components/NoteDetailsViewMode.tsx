import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface INoteDetailsViewModeProps {
    value: string;
}

export const NoteDetailsViewMode: FC<INoteDetailsViewModeProps> = ({ value }) => {
    return <ReactMarkdown>{value}</ReactMarkdown>;
};