import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios';

class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log ("this is the response:", response);
        this.setState(() => ({friendList: response.data }));
        console.log ("this is friendList object:", this.state.friendList);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="friend-list">
       
      </div>
    );
  }
}

export default FriendList;