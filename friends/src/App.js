import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendsData: []
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => {
          this.setState({friendsData:response.data})
        })
        .catch(err => {
          console.log(err);
        });

  }
  render() {
    return (<div>
      <h1> My Friends </h1>
      <FriendsList friends={this.state.friendsData}/>
    </div>);
  }
}

export default App;
