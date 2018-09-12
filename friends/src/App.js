import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(friends => this.setState({friends: friends.data}))
         .catch(err => console.log(new Error(err)));
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
