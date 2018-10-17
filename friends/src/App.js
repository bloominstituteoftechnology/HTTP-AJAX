import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <header>Look at all my shiny friends!</header>
        <FriendList friendArr={this.state.friends}/>
      </div>
    );
  }
}

export default App;
