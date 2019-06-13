import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import FriendsContainer from './components/FriendsContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <FriendsContainer />
      </Router>
    </div>
  );
}

export default App;