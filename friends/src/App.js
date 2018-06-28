import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      friendsData: [],
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
  handleSetData = data => this.setState({ friendsData: data });
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
          <FriendsForm
            handleSetDat={this.handleSetData}
          />
        </header>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
