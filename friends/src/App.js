import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList'
import AddFriend from './components/AddFriend/AddFriend'
import axios from 'axios';


class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  }
  render() {
    return (
      <div className="App">
        <AddFriend onCreate={this.getFriends}/>
        <FriendsList
          onCreate={this.getFriends} 
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          friends={this.state.friends} 
          onX={this.deleteFriend} 
          onNewDeets={this.newDeetsSubmitHandler} 
        />
      </div>
    );
  }
  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }
  componentDidMount() {
    this.getFriends();
  }
  deleteFriend = id => {
    const endpoint = `http://localhost:5000/friends/${id}`;
    axios.delete(endpoint)
    .then(response => this.setState({ friends: response.data}))
    .catch(() => {
      console.error('error deleting')
    })
  }
  

}

export default App;
