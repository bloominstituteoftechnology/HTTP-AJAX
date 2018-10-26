import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  constructor() {
      super();
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
      };
  }

  handleInput = (event) => {

    this.setState({ [event.target.name]: event.target.value });
  };

  submitFriend = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    const newFriend = {
      name,
      age,
      email
    };
    axios.post('http://localhost:5000/friends', newFriend )
      .then(response => {
        console.log(response);
        this.setState({ 
          name: '',
          age: '',
          email: '',
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    return (
      <div>
        <div >Lambda Friends</div>
        <ul>
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id}>
                <div>{`Name: ${friend.name}`}</div>
                <div>{`Age: ${friend.age}`}</div>
                <div>{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>

        <div>
              <form type='submit' action='http://localhost:5000/friends' method='post'> {/* !! should action be /friends or http://..5000/friends? */}
                  <label htmlFor='name'>Name</label>
                  <input
                      type='text'
                      name='name'
                      value={this.state.name}
                      onChange={this.handleInput}
                  />
                  <label htmlFor='age'>Age</label>
                  <input
                      type='number'
                      name='age'
                      value={this.state.age}
                      onChange={this.handleInput}
                  />
                  <label htmlFor='email'>Email</label>
                  <input
                      type='email'
                      name='email'
                      value={this.state.email}
                      onChange={this.handleInput}
                  />
                  <div className='button'>
                      <button type='submit' onClick={this.submitFriend}>Add friend</button>
                  </div>
              </form>
          </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`Error getting friends: ${error}`);
      })
  }
}
export default FriendsList;