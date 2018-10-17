import React, { Component } from 'react';
import axios from "axios"
import FriendsListForm from "./components/friendsListForm"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
      <FriendsListForm />

      </div>
    );
  }
}

export default App;
