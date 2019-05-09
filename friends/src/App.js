import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div className="App">
      <FriendsList />
      <FriendForm />
    </div>
  );
}

export default App;
