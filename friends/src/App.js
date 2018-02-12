import React, { Component } from 'react';
import './App.css';
import Friend from './Friend';

class App extends Component {
  state = {
    friends: [],
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.friends.map(friend => {
            return <Friend 
              friend={friend}
            />
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {

  }
}

export default App;
