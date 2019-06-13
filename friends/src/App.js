import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }

  addFriend = friendData => {
    axios
      .post('http://localhost:5000/friends', friendData)
      .then(response => {
        this.setState({
          friends: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateFriend = (friendData, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friendData)
      .then(response => {
        this.setState({
          friends: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
      <h1>FRIEND LIST</h1>
        <FriendList 
          friends={this.state.friends}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
        />
        <Form 
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
