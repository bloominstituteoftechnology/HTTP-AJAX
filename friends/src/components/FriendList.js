import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }
  addNewFriend = event => {
    event.preventDefault();
    if (this.state.name && this.state.age) {
      axios
        .post('http://localhost:5000/friends', {
          name: this.state.name,
          age: this.state.age
        })
        .then(response => {
          this.setState(() => ({
            friends: response.data,
            name: '',
            age: '',
            email: ''
          }));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <div key={friend.name} className="friend">
            {friend.name} | {friend.age} | {friend.email}
          </div>
        ))}
        {console.log(`Friends ${this.state.friends}`)}
        <form onSubmit={this.addNewFriend}>
          <input
            autoFocus
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder="Add New Friend"
            name="name"
          />
          <input
            autoFocus
            value={this.state.age}
            onChange={this.changeHandler}
            placeholder="Age "
            name="age"
          />
          <input
            autoFocus
            value={this.state.email}
            onChange={this.changeHandler}
            placeholder="Email "
            name="mail"
          />
          <button type="submit">Add New Friend</button>
        </form>
      </div>
    );
  }
}
