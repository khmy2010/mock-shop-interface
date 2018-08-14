import React, { Component } from 'react';

import './root.css';

import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App;
