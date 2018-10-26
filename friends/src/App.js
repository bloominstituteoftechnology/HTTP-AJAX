import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList/FriendsList.js'
import FriendsForm from './FriendsForm/FriendsForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err))
  }

  //add friend by taking up response information from FriendForm component

  addFriend = (response) => {
    this.setState({
      friends: response
    })
  }

  //remove friend by passing entire function down to Friend component
  
  deleteFriend = (id) => {
    return () => {
      axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(response => 
          this.setState({
            friends: response.data
        }, console.log(this.state.friends)))
        .catch(err => console.log(err))
    }
  }

  updateFriendList = (response) => {
    this.setState({
      friends: response
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Who are your friends?</h1>
        <FriendsList 
          friends={this.state.friends}
          deleteFriend={this.deleteFriend} 
          updateFriendList={this.updateFriendList}
        />
        <FriendsForm addFriend={this.addFriend}/>
      </div>
    );
  }
}

export default App;
