import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListFriend from './components/ListFriend';

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
      .then(response => this.setState({ friends: response.data}))
      .catch(error => console.log(error))
  }
  render() {
    const {friends} = this.state
    return (
      <div className="App">
        <ListFriend friends={friends} />
      </div>
    );
  }
}

export default App;
