import React, { Component } from 'react';
import axios from 'axios';

import FriendsDisplay from './components/FriendsDisplay/FriendsDisplay';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: null,
        email: ''
      },
    }
  }
  
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`error getting data from server: ${error}`);
    });
  }
  
  handleInput = (event) => {
    this.setState({ newFriend: event.target.value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    const friend = {
      name: this.state.newFriend.name,
      age: this.state.newFriend.age,
      email: this.state.newFriend.email,
    };
    
    axios.post('http://localhost:5000/friends', { friend })
    .then(response => {
      
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="App">
          {this.state.friends.map(friend =>{
            return (
              <FriendsDisplay key={friend.id} friend={friend} />
            )
          })}

          <form className="input" onSubmit={this.handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="name"
              value={this.state}/>
            <br/>
            <input type="text" placeholder="age" />
            <br/>
            <input type="text" placeholder="email" />
          </form>

        </div>
      </div>
      
    );
  }
  
}

export default App;
