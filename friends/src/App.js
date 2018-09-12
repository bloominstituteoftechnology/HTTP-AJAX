import React, { Component } from 'react';
import logo from './logo.svg';
import Friends_Logo from './Friends_Logo.svg';
import './App.css';
import axios from 'axios';
import FriendContainer from './components/FriendContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    }
  }

  componentDidMount() {    
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friendsList: response.data });
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Friends_Logo} className="App-logo" alt="logo" />          
        </header>
        <div className='friend-list'>
          <FriendContainer friends={this.state.friendsList} />
        </div>
      </div>
    );
  }
}

export default App;

// Inside your React application, create a component to display the list of friends coming from the server.
