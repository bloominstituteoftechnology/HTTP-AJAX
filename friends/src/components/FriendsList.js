import React, { Component } from 'react';
import axios from 'axios';
import './FriendsList.css';

class FriendsList extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    friends: []
  };
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log('there was an error', error);
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    axios.post('http://localhost:5000/friends', { name, age, email })
    .then((response) => {
      console.log(response.data);
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  };
  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };
  render() {
    return (
      <div>
        <h2 className="friend-title">Lambda Friends</h2>
        <form className="friendForm" onSubmit={this.handleSubmit}>
          <label htmlFor="input-name">Name</label>
          <input type="text" name="name" value={this.state.name} id="input-name" onChange={this.onChange} />
          <label htmlFor="input-age">Age</label>
          <input type="number" name="age" value={this.state.age} id="input-age" onChange={this.onChange} />
          <label htmlFor="input-email">Email</label>
          <input type="email" name="email" value={this.state.email} id="input-email" onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
        <ul className="friend-card">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <p className="friend-name">{`Name: ${friend.name}`}</p>
                <p className="friend-age">{`Age: ${friend.age}`}</p>
                <p className="friend-email">{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsList;
