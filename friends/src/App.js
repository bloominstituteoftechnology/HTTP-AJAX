import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

function App() {
  const [friends, setFriends] = useState([]);
  const [friendForm, setFriendForm] = useState({name: '', age: '', email: ''});
  const baseUrl = 'http://localhost:5000/friends';

  const friendInputChange = target => {
    let newForm = friendForm;
    newForm[target.id] = target.value;
    setFriendForm({...newForm });
  }

  const CreateFriend = async e => {
    e.preventDefault();
    const { name, email, age } = friendForm;
    const body = {name, age: parseInt(age), email}
    const req = await Axios.post(baseUrl, body)
    setFriends(req.data)
    setFriendForm({name: '', age: '', email: ''});
  }

  const deleteFriend = async id => {
    const req  = await Axios.delete(`${baseUrl}/${id}`)
    setFriends(req.data)
  }

  const fetchFriends = async () => {
        try {
          const req = await fetch(baseUrl);
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
      <FriendList friends={friends} deleteFriend={deleteFriend}/>
      <FriendForm 
      friendInputChange={friendInputChange}
      createFriend={CreateFriend}
      friendForm={friendForm} />
    </div>
  );
}

export default App;
