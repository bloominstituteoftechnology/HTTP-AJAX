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

  handleSubmitFriend = () => {
    const friend = { friend: this.state.friend };
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data });
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
          friend={this.state.friend}
          submitFriend={this.handleSubmitFriend}
          inputFriend={this.handleNameInput}
        />
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
