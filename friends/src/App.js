import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      friendsData: [],
      friend: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('GET RESPONSE: ', response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
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
