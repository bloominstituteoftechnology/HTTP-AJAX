import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const FriendInfo = props => {
  return (
    <div className="main-display">
      {props.param.map(friend => (
        <div key={friend.id} className="friend-display">
        <h3 className="friend-name">{friend.name}</h3>
        <h5>age: {friend.age}</h5>
        <p>email: {friend.email}</p>
        </div>
      ))}
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div>
        <FriendInfo param={this.state.friends}/>
      </div>
    );
  }
}

export default App;
