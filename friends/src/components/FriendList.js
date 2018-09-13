import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      inputText: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }
  addNewFriend = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        friends: [
          ...this.state.friends,
          {
            name: this.state.inputText,
            age: this.state.inputTextAge,
            key: this.state.inputText,
            className: 'friend',
            id: Date.now()
          }
        ],
        inputText: ''
      });
    }
  };
  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  handleInputAge = event => {
    this.setState({
      inputTextAge: event.target.value
    });
  };

  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <div key={friend.name} className="friend">
            {friend.name} | {friend.age}
          </div>
        ))}
        {console.log(`Friends ${this.state.friends}`)}
        <input
          autoFocus
          value={this.inputText}
          onChange={this.handleInput}
          placeholder={'Add New Friend'}
        />
        <input
          autoFocus
          value={this.inputTextAge}
          onChange={this.handleInputAge}
          placeholder={'Age'}
        />
        <button onClick={this.addNewFriend}>Add New Friend</button>
      </div>
    );
  }
}
