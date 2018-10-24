import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friends/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    );
  }
}

export default App;
