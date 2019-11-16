import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: "",
    }
  }

  setData = data => this.setState({ friendsData: data });

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setData( response.data );
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmitFriend = event => {
    event.preventDefault();
    const newFriend = this.state.friend;
    axios
      .post("http://localhost:5000/friends", {friend: newFriend})
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data, friend: "" });
      })
      .catch(error => console.log(error));
  };

  handleNameInput = e => {
    this.setState({ friend: e.target.value });
  };

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
        <FriendForm 
          value={this.state.friend}
          submitFriend={this.handleSubmitFriend}
          inputFriend={this.handleNameInput}
        />
        <FriendsList friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
