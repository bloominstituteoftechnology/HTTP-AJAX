import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friend-list">
        <h3>Saved Friends:</h3>
        {this.props.list.map(friend => (
          <span className="friend-title">{friend.name}</span>
        ))}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    );
  }
}

