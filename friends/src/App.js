import React from 'react';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';
import axios from 'axios';


class App extends React.Component {
    render() {
        return (
            <div className="app">
            <Friends />
            <FriendForm />
            </div>
        )
    }
}

export default App;