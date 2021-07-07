import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateFriends: false,
      name: '',
      age: '',
      email: '',
    };
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showUpdateFriends = () => {
    this.setState({ showUpdateFriends: !this.state.showUpdateFriends });
  };

  deleteFriends = friendId => {
    axios
      .delete(`http://localhost:8000/note/delete/${friendId}`)
      .then(response => {
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriends = friendId => {
    const friends = {};
    if (this.state.title !== '') {
      friends.name = this.state.name;
    }
    if (this.state.age !== '') {
      friends.age = this.state.age;
    }
    if (this.state.email !== '') {
        friends.email = this.state.email;
      }
    axios
      .put(`http://localhost:5000/friends/edit/${friendId}`, friends)
      .then(response => {
        this.setState({ showUpdateFriend: false, name: '', age: '', email: '' });
        this.props.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { friends } = this.props;
    return (
      <div key={friends._id}>
        <h3>{friends.name}</h3>
        <div>{friends.email}</div>
        <button onClick={() => this.deleteFriends(friends._id)}>Delete Friend</button>
        <button onClick={this.showUpdateFriends}>Update Friend</button>

        {this.state.showUpdateFriends ? (
          <div>
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="Age"
              name="age"
              value={this.state.age}
            />
            <input
              type="text"
              onChange={this.handleTextInput}
              placeholder="Email"
              name="email"
              value={this.state.email}
            />
            <button onClick={() => this.updateFriends(friends._id)}>
              Save Updates
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Friends;
