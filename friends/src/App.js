import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    }
  }

  ChangeName = event => {
    this.setState ({ name: event.target.value });
  };

  ChangeAge = event => {
    this.setState ({ age: event.target.value });
  };

  ChangeEmail = event => {
    this.setState ({ email: event.target.value });
  };

  handleSubmit = event => {
    axios.post('http://localhost:5000/friends', { 
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
     })
    .then(response => {
      console.log(response.data);
    })  
  };

  render() {
    return (
      <div>
        <div className="friend-title">Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
          <li key="listKey" className="friend">
            <form onSubmit={this.handleSubmit}>
              <div className="friend-name">Name: 
                <input name='name' type='text' onChange={this.ChangeName} placeholder='Name' />
              </div>
              <div className="friend-age">Age: 
              <input name='age' type='text' onChange={this.ChangeAge} placeholder='Age' />
              </div>
              <div className="friend-email">Email: 
              <input name='email' type='text' onChange={this.ChangeEmail} placeholder='Email' />
              </div>
              <button type='submit'>Save</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`there was an error getting friends ${error}`)
    });
  }
}

export default App;
