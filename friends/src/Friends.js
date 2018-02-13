import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
  state = {
    friends: [],
  };

  render() {
    return (
      <div>
      <div>
        <h1>Lambda Friends</h1>
      </div>
      <ul>
        {this.state.friends.map(friend => { return(
          <li key = {friend.email}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>E-Mail: {friend.email}</div>
          </li>
      )  })}
      </ul>
      </div>
    );
  }


  componentWillMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(error => {
      console.log('There was an error', error)
    })
  }
}

export default Friends;
