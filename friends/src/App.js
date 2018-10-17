import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import NewFriendForm from './components/NewFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      friendList: [],
    }
  }

  componentDidMount = () => {
    const friendRequest = axios.get('http://localhost:5000/friends');
    friendRequest.then(response => {
      this.setState({ friendList: response.data });
    });
  }


  render() {
    return (
      <div className='app'>
        <Friends
        friendList={this.state.friendList}
        />
        <NewFriendForm/>
      </div>
    );
  }
}

export default App;
