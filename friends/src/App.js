import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => this.setState({ friends: response.data }))
      .catch((error) => console.log(error));
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFriend = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    const newFriend = { name, age, email };

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then((response) => {
        this.setState({
          friends: response.data,
          name: '',
          age: '',
          email: '',
        });
      })
      .catch((error) => console.log(error));
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then((response) => {
        this.setState({ friends: response.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <FriendsList
          friends={this.state.friends}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;
