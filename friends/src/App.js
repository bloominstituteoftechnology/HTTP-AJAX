import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './Components/FriendList';
import './App.css';
import AddFriends from './Components/AddFriends';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then ( response => { this.setState({ list: response.data } );
  })
    .catch (error => console.log(error)); 
  }


  render() {
    return (
      <div className="App">
        <AddFriends />
        <FriendList friends={this.state.list} />        
      </div>
    );
  }
}

export default App;
