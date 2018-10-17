import React, { Component } from 'react';
import FriendsListForm from "./components/friendsListForm"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friend: [],
    }
  }

  componentDidMount() {
    console.log("Mount")
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
