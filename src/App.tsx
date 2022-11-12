import React from 'react';
import './App.css';
import Query from 'pages/Query'
import { Info } from './info';

function App() {
    return (
        <div className="App">
            <Query info={Info}></Query>
        </div>
    );
}

export default App;