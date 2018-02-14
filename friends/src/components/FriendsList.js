import React from 'react';
import axios from 'axios';
import './FriendsList.css';

class FriendsList extends React.Component {
  state = {
    friends: [],
    newName: '',
    newAge: '',
    newEmail: '',
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  }

  handleAgeChange = (event) => {
    this.setState({ newAge: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ newEmail: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail,
    }
    this.setState({ newName: '', newAge: '', newEmail: '' });
    axios
    .post('http://localhost:5000/friends', newFriend)
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }

  render() {
    return (
      <div>
        <h1>Friends in Lambda Places</h1>
        <input type="text" value={this.state.newName} onChange={this.handleNameChange} placeholder="Name..." />
        <input type="text" value={this.state.newAge} onChange={this.handleAgeChange} placeholder="Age..." />
        <input type="text" value={this.state.newEmail} onChange={this.handleEmailChange} placeholder="Email..."/>
        <button onClick={this.handleSubmit}>Add New Friend</button>
        <ul className="friend-container">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div>{friend.name}</div>
                <div>{`Age: ${friend.age}`}</div>
                <div>{`Email: ${friend.email}`}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FriendsList;