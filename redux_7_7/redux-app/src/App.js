import React from 'react';
import './App.css';
import DevTools from './DevTools';

import CommentsListContainer from './CommentsListContainer';

const App = () => {
    return (
        <div className="App">
            <CommentsListContainer/>
            <DevTools />
        </div>
    );
};

export default App;