import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export default FriendsList; 