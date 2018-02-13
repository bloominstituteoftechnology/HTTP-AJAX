import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddFriend from './components/AddFriend';
import DisplayFriends from './components/DisplayFriends';

class App extends Component {
  state = {
    friends: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Friends</h1>
        <DisplayFriends friends={this.state.friends} onDelete={this.removeFriend}/>
        <AddFriend onCreate={this.loadFriends} />
      </div>
    );
  }
  componentDidMount(){
    console.log('component did mount')
    this.loadFriends();
  }

  loadFriends = () => {
    console.log('load friends called');
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({ friends: response.data})
    })
    .catch((error) => {
      console.log('there was an error', error);
    });
  }

  removeFriend = id => {
    const endpoint = `http://localhost:5000/friends/${id}`
    axios.delete(endpoint)
    .then(response => {
      console.log(response);
      this.setState({ friends: response.data });
    })
    .catch((error) => {
      console.error(error);
    })
  }
}

export default App;
