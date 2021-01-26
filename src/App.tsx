import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
    <>
        <Router>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </Router>
        <GlobalStyles />
    </>
);

export default App;
