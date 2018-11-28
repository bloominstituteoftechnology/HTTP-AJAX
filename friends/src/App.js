import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends}/>
        <Form />
      </div>
    );
  }
}

export default App;
