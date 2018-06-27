import React, { Component } from 'react';
import FriendsList from './FriendsList';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friendsData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setState({friendsData: response.data })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList friends={this.state.friendsData} />
        
      </div>
    );
  }
}

export default App;
