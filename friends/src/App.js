import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';



const App = props => {
  return (
    <div className="App">
      <FriendsList friends={props.friendsData} />
      <FriendForm />
    </div>
  )
}

export default App;

