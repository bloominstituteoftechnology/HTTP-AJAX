import React, { Component } from 'react';
import axios from "axios"
import FriendsListForm from "./components/friendsListForm"
import FriendCard from "./components/friendCard"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      friend: {
				name: '',
				age: '',
				email: '',
			}
    }
  }

  addFriendData() {
   console.log("test")
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data}))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
      <FriendsListForm addFriendData= {this.addFriendData} />
      <FriendCard friends= {this.state.friends} />

      </div>
    );
  }
}

export default App;
