import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: [],
        newFriend: {
        name: '',
        age: '',
        email: ''
        }
    };
}


componentDidMount() {
  Axios
  .get('http://localhost:5000/friends')
  .then(response => {
    console.log("GET RESPONSE", response);
    this.setState({ friends: response.data })
  })
  .catch(err => {
    console.log(err);
  });
}

addFriend = () => {
  const newFriend = this.state.newFriend;
  Axios
  .post('http://localhost:5000/friends', this.state.newFriend)
  .then(response => {
    console.log("POST RESPONSE", response);
    this.setState({ friends: response.data, newFriend: '' });
  })
  .catch(err => console.log(err));
}

handleChange = e => {
  this.setState({ newFriend: {[e.target.name]: e.target.value }});
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">These are my Friends!</h1>
        </header>
        <FriendsList 
        friends={this.state.friends}
        newFriend={this.state.newFriend}
        textHandler={this.handleChange}
        addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
