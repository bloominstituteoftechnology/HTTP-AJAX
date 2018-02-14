import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newFriend = { 'friendName' 'friendAge' 'friendEmail' };
    this.state.friends.push(newFriend);
    axios.post('http://localhost:5000/friends', newFriend).then((result => {}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.friends.map((friend) => {
            return (
              <li key = {friend.email} className ="friend">
                <div> {friend.name} </div> 
                <div> {`Age: ${friend.age}`} </div>
                <div> {`Email: ${friend.email}`} </div>
              </li>  
            )
          })}
        </ul>
        <form onSubmit={this.submit}>
          <h3>Add New Friend</h3>
          <input type='text' name='friendName' placeholder='Name?'/>
          <input type='text' name='friendAge' placeholder='Age?'/>
          <input type='text' name='friendEmail' placeholder='Email?'/>
          <button type='submit'>Save</button>
        </form>  
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({friends: response.data});
    })
    .catch(error => {
      console.log('there was an error');
    });
  }
}

export default App;
