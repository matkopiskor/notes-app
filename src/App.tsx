import { FC } from 'react';
import { Notes } from './components/Notes/Notes';

export const App: FC = () => {
    return (
        <>
            <header>
                <h1>Notes app</h1>
            </header>
            <main>
                <Notes/>
            </main>
            <footer>
                <span>Made by: Matko Piškor</span>
            </footer>
        </>
    );
};
