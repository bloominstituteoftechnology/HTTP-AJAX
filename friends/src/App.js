import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import NewFriendForm from './components/NewFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.url = 'http://localhost:5000/friends';
    this.state = {
      name: '',
      age: '',
      email: '',
      friendList: [],
    }
  }

  componentDidMount = () => {
    const friendRequest = axios.get(this.url);
    friendRequest.then(response => {
      this.setState({ friendList: response.data });
    });
  }


  render() {
    return (
      <div className='app'>
        <Friends/>
        <NewFriendForm/>
      </div>
    );
  }
}

export default App;
