// React Imports and Axios
import axios from 'axios';
import React, { Component } from 'react';

// Component Imports
import DisplayFriends from './component/DisplayFriends';
import AddFriend from './component/AddFriend';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log('Error', error));
  }

  addNewFriend = (name, age, email) => {
    let newFriend = {
      name: name,
      age: age,
      email: email
    };
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log('Could not add friend', error));
  };

  render() {
    return (
      <div className="App">
        <DisplayFriends friends={this.state.friends} />
        <AddFriend
          newFriends={this.state.newFriends}
          addNewFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
