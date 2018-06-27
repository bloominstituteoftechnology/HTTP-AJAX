import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import FriendsList from './FriendsList';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    }
  }

  handleSetData = data => this.setState({ friendsData: data });

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GET RESPONSE: ", response);
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
