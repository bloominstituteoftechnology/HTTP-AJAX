import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList' ;
import axios from 'axios';

class App extends Component {
  constructor() {
    super() ;
    this.state = { friendsData: [] }
  }
  // handleSetStateDataFromServer = serverData => 
  //   this.setState({ friendsData: serverData });
  
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

        
          <FriendsList propFriendsData={this.state.friendsData} />

      </div>
    );
  }
}

export default App;
