import React, { Component } from "react";
import axios from "axios";
import FriendsList from './Components/FriendsList';
import './styles/reset.css';
import "./styles/Friends.css";

class Friends extends Component {
  state = {
     friends: [],
  };

  render() {
    return (
      <div className="component-Container">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(() => console.error('error getting data from axios: check componentDidMount method'))
  }
}

export default Friends;
