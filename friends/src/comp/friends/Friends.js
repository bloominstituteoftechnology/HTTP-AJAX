import React, { Component } from 'react';
import axios from 'axios';

// components
import Friend from './Friend';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(({ data }) => {
        return this.setState({
          friends: [ ...data ]
        });
      });
  }
  
  render() {
    const { friends } = this.state;

    return (
      friends.map(friend => {
        return (
          <Friend key={ friend.id } friend={ friend } />
        )
      })
    )
  }
}
