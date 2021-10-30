import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.css';
import { NotesProvider } from './utils/notesModule';

ReactDOM.render(
    <React.StrictMode>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
