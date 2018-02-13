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
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }


  render() {
  console.log('I am this in App: ', this)
    return (
      <div className="App">
        <AddFriend name={this.state.name} age={this.state.age} email={this.state.email} friends={this.state.friends}/>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
