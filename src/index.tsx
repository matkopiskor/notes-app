import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.css';
import { NotesProvider } from './utils/notesModule/NotesProvider';

ReactDOM.render(
    <React.StrictMode>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
