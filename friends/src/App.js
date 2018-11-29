import React, { Component } from 'react';
import axios from 'axios';
import FriendsContainer from './components/FriendsContainer';
import Form from './components/Form';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response); 
        this.setState({friends: response.data})
      })
      .catch(err => console.log(err));
      
  }

  addFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendsContainer friends={this.state.friends}/>
        <Form addFriend={this.addFriend}/>
      </div>
    );
  }
}

export default App;
