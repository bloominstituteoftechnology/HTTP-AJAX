import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList' ;
import FriendForm from './components/FriendForm'


class App extends Component {
  constructor() {
    super() ;
    this.state = 
    { friendsData: [] },
    { newFriend: {name: "", email: "", age: ""} }
  }
  // handleSetStateDataFromServer = serverData => 
  //   this.setState({ friendsData: serverData });
  createNewFriend = event => {
    this.setState({ newFriend: {[event.target.name]: event.target.value }})
  }

  // getting initial server data, setting state
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("MY-GET-RESPONSE: ", response.data) ;
        this.setState({ friendsData: response.data });
      })
      .catch(error => console.log("My-Server-Error: ", error));      
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>HTTP-AJAX Project</h1>

          <FriendForm propCreateNewFriend={this.createNewFriend}/>
          <FriendsList propFriendsData={this.state.friendsData} />

      </div>
    );
  }
}

export default App;
