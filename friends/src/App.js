import React from 'react';

import './App.css';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';


function App() {
  return (
    <div className="App">
      <FriendsList/>
      <AddFriend/>
    </div>
  );
}

export default App;
