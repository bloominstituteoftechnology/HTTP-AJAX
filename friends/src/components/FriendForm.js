import React from 'react';
import axios from 'axios';
import './FriendForm.css'

class NewFriend extends React.Component {
  state = {
    friends: [],
    newName: '',
    newAge: '',
    newEmail: '',
  };

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  handleNameChange = event => {
    this.setState({ newName: event.target.value });
  };

  handleAgeChange = event => {
    this.setState({ newAge: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ newEmail: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail,
    };
    this.setState({ newName: '', newAge: '', newEmail: '' });
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    return (
    <div>
    <div className="friend-title">Lambda Friends</div>
    <div className="form">
        <form>
          <label className="name">
            Name:
            <input type="text" value={this.state.newName} onChange={this.handleNameChange} placeholder="Name" />
          </label>
          <label className="age">
            Age:
            <input type="text" value={this.state.newAge} onChange={this.handleAgeChange} placeholder="Age" />
          </label>
          <label className="email">
            Email:
            <input type="text" value={this.state.newEmail} onChange={this.handleEmailChange} placeholder="Email" />
          </label>
          <button className="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
      <div>
        
        
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>;
          })}
        </ul>
      </div>
        </div>);
  }
}

export default NewFriend;