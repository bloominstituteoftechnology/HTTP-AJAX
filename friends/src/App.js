import React, { useState, useEffect } from 'react';
import './App.css';
import FriendList from './components/FriendList';

function App() {
  const [friends, setFriends] = useState([]);

  const fetchFriends = async () => {
        try {
          const req = await fetch('http://localhost:5000/friends');
          const friends = await req.json();
          setFriends(friends);
        } catch (err) {
          console.log(err)
        }
  }

  useEffect(() => {
    fetchFriends();
  }, [])

  return (
    <div className="App">
      <FriendList friends={friends}/>
    </div>
  );
}

export default App;
