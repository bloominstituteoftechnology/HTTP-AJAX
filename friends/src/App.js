import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <form>
          <h3>New Friend:</h3>
          <input type='text' placeholder='Enter name here'/>
          <input type='number' placeholder='Enter age here'/>
          <input type='text' placeholder='Enter email here'/>
          <button>Submit New Friend</button>
        </form>
        <h3>List of Frends</h3>
        <FriendsList />
      </div>
    );
  }
}

export default App;
