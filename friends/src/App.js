import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
    .then((friends) => {
      this.setState({
        friends: friends.data,
      })
    })
  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading...</h1>
    }
    else {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.state.friends.map((friend) => {
              return (
                <h1>{friend.name}</h1>
              )
            })}
          </div>
        </header>
      </div>
    );
    }
  }
}

export default App;
