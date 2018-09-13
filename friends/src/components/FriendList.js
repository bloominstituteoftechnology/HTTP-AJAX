import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
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
  removeCompleted = event => {
    event.preventDefault();
    let newTrimmedArray = [...this.state.appStateTodos];
    newTrimmedArray = newTrimmedArray.filter(element => {
      if (!element.completed) {
        return element;
      }
    });
    this.setState({ appStateTodos: newTrimmedArray });
  };
  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <Link
            to={`/friends/${friend.name}`}
            key={friend.name}
            className="friend"
          >
            {friend.name} | {friend.age} | {friend.email}
          </Link>
        ))}
      </div>
    );
  }
}
