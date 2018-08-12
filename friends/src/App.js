import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form/Form';
class App extends Component {
  constructor() {
    super();
    this.state={
      friends:[],
      friend: ''
    };
    const inputHandler = e => {
      this.setState({ friend: e.target.value });
    };
    const addFriend = e => {
      e.preventDefault();
      const newFriend = {
        name: this.state.friends.name,
        age: this.state.friends.age,
        email: this.state.friends.email
      };
      const friends = this.state.friends.slice();
      friends.push(newFriend);
      this.setState({ friend:'', friends });
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  render() {
    if (this.state.friends) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Friends List</h1>
        </header>
        <ul>
          {this.state.friends.map(friend => (
          <div>
            <h1 key={friend.id}>{friend.name}</h1>
            <li>Age:{friend.age}</li>
            <li>E-Mail:{friend.email}</li>
          </div>
          ))}
        </ul>
      <Form onClick={this.state.addFriend} value={this.state.inputHandler}/>
      </div>
    );
  };
  };
};

export default App;
